import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://dentipai.webflow.io/home/home-v1';
const SITE_KEY = 'dentipai-c7ba31ad';
const PAGE_KEY = 'home-v1-8ad5662a';

const RESEARCH_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}`);
const SPECS_DIR = path.resolve(`docs/research/${SITE_KEY}/${PAGE_KEY}/components`);
const SCREENSHOT_DIR = path.resolve(`docs/design-references/${SITE_KEY}/${PAGE_KEY}`);
const ASSET_DIR = path.resolve(`public/sites/${SITE_KEY}/${PAGE_KEY}`);
const IMAGES_DIR = path.resolve(`public/sites/${SITE_KEY}/${PAGE_KEY}/images`);

// Ensure directories exist
[RESEARCH_DIR, SPECS_DIR, SCREENSHOT_DIR, ASSET_DIR, IMAGES_DIR].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) return resolve(null);
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log(`Navigating to ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle0', timeout: 60000 });

  // 1. Desktop full screenshot
  console.log('Capturing desktop full screenshot...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'full-desktop-1440.png'),
    fullPage: true
  });

  // 2. Tablet screenshot
  await page.setViewport({ width: 768, height: 1024 });
  await page.waitForTimeout ? await page.waitForTimeout(1000) : new Promise(r => setTimeout(r, 1000));
  console.log('Capturing tablet full screenshot...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'full-tablet-768.png'),
    fullPage: true
  });

  // 3. Mobile screenshot
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1000));
  console.log('Capturing mobile full screenshot...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'full-mobile-390.png'),
    fullPage: true
  });

  // Reset back to desktop
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 1000));

  // 4. Discover all assets and topology
  console.log('Extracting assets and topology...');
  const data = await page.evaluate(() => {
    // Collect all sections
    const sections = [];
    // Header
    const header = document.querySelector('header');
    if (header) {
      sections.push({ name: 'Header', tag: 'header', selector: 'header.header' });
    }
    // Main sections
    document.querySelectorAll('main.main-wrapper > section, main.main-wrapper > div').forEach((el, i) => {
      sections.push({
        name: el.className ? el.className.split(' ')[0] : `section-${i}`,
        tag: el.tagName.toLowerCase(),
        className: el.className,
        selector: '.' + el.className.split(' ').join('.')
      });
    });
    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
      sections.push({ name: 'Footer', tag: 'footer', selector: 'footer' });
    }

    // Asset discovery
    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      className: img.className,
      parentClasses: img.parentElement?.className,
      position: getComputedStyle(img).position,
      zIndex: getComputedStyle(img).zIndex
    }));

    const backgroundImages = [...document.querySelectorAll('*')].filter(el => {
      const bg = getComputedStyle(el).backgroundImage;
      return bg && bg !== 'none' && !bg.includes('gradient');
    }).map(el => ({
      url: getComputedStyle(el).backgroundImage.replace(/url\(["']?([^"']*)["']?\)/, '$1'),
      element: el.tagName + '.' + (el.className?.toString().split(' ')[0] || '')
    }));

    const svgs = [...document.querySelectorAll('svg')].map((s, idx) => ({
      index: idx,
      outerHTML: s.outerHTML,
      className: s.getAttribute('class'),
      parentClasses: s.parentElement?.className,
      width: s.getAttribute('width') || s.getBoundingClientRect().width,
      height: s.getAttribute('height') || s.getBoundingClientRect().height
    }));

    const fonts = [...new Set([...document.querySelectorAll('*')].slice(0, 300).map(el => getComputedStyle(el).fontFamily))];

    const colors = [...new Set([...document.querySelectorAll('*')].slice(0, 300).flatMap(el => {
      const cs = getComputedStyle(el);
      return [cs.color, cs.backgroundColor, cs.borderColor];
    }))].filter(c => c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent');

    return {
      sections,
      images,
      backgroundImages,
      svgs,
      fonts,
      colors
    };
  });

  fs.writeFileSync(path.join(RESEARCH_DIR, 'raw_data.json'), JSON.stringify(data, null, 2));
  console.log(`Found ${data.sections.length} sections, ${data.images.length} images, ${data.svgs.length} SVGs`);

  // Download all images
  const allImageUrls = new Set();
  data.images.forEach(img => { if (img.src) allImageUrls.add(img.src); });
  data.backgroundImages.forEach(bg => { if (bg.url) allImageUrls.add(bg.url); });

  console.log(`Downloading ${allImageUrls.size} unique image assets...`);
  const imageMap = {};
  for (const url of allImageUrls) {
    try {
      const urlObj = new URL(url);
      const base = path.basename(urlObj.pathname);
      const dest = path.join(IMAGES_DIR, base);
      await downloadFile(url, dest);
      imageMap[url] = `/sites/${SITE_KEY}/${PAGE_KEY}/images/${base}`;
      console.log(`Downloaded: ${base}`);
    } catch (e) {
      console.error(`Failed to download ${url}:`, e.message);
    }
  }

  fs.writeFileSync(path.join(RESEARCH_DIR, 'image_map.json'), JSON.stringify(imageMap, null, 2));

  // Section-by-section screenshot and detailed CSS extraction
  const propsToExtract = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'textTransform','textDecoration','backgroundColor','background',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'width','height','maxWidth','minWidth','maxHeight','minHeight',
    'display','flexDirection','justifyContent','alignItems','gap',
    'gridTemplateColumns','gridTemplateRows',
    'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
    'boxShadow','overflow','overflowX','overflowY',
    'position','top','right','bottom','left','zIndex',
    'opacity','transform','transition','cursor',
    'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
    'whiteSpace','textOverflow'
  ];

  console.log('Extracting computed styles and screenshots for each section...');
  for (let i = 0; i < data.sections.length; i++) {
    const sec = data.sections[i];
    console.log(`Processing section ${i + 1}/${data.sections.length}: ${sec.name}`);

    // Scroll to element
    const secInfo = await page.evaluate((selector, props) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      el.scrollIntoView();

      function extractStyles(element) {
        const cs = getComputedStyle(element);
        const styles = {};
        props.forEach(p => {
          const v = cs[p];
          if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') styles[p] = v;
        });
        return styles;
      }

      function walk(element, depth) {
        if (depth > 5) return null;
        return {
          tag: element.tagName.toLowerCase(),
          classes: element.className?.toString().split(' ').slice(0, 5).join(' '),
          text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3 ? element.textContent.trim().slice(0, 200) : null,
          styles: extractStyles(element),
          images: element.tagName === 'IMG' ? { src: element.src, alt: element.alt, width: element.naturalWidth, height: element.naturalHeight } : null,
          children: [...element.children].slice(0, 30).map(c => walk(c, depth + 1)).filter(Boolean)
        };
      }

      const rect = el.getBoundingClientRect();
      return {
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        tree: walk(el, 0),
        rawHTML: el.outerHTML
      };
    }, sec.selector, propsToExtract);

    if (secInfo) {
      // Take section screenshot
      const safeName = sec.name.replace(/[^a-zA-Z0-9_-]/g, '_');
      try {
        const secHandle = await page.$(sec.selector);
        if (secHandle) {
          await secHandle.screenshot({
            path: path.join(SCREENSHOT_DIR, `section-${i}-${safeName}.png`)
          });
        }
      } catch (e) {
        console.log(`Could not screenshot individual element ${sec.selector}, skipping element screenshot.`);
      }

      fs.writeFileSync(path.join(RESEARCH_DIR, `section-${i}-${safeName}.json`), JSON.stringify(secInfo, null, 2));
    }
  }

  console.log('Extraction complete! Closing browser...');
  await browser.close();
}

main().catch(err => {
  console.error('Inspection error:', err);
  process.exit(1);
});
