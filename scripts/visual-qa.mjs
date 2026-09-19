import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LOCAL_URL = 'http://localhost:3333/';
const SITE_KEY = 'dentipai-c7ba31ad';
const PAGE_KEY = 'home-v1-8ad5662a';
const SCREENSHOT_DIR = path.resolve(`docs/design-references/${SITE_KEY}/${PAGE_KEY}`);

async function scrollPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  // Wait 1.5s for all lazy images to finish loading
  await new Promise(r => setTimeout(r, 1500));
}

async function main() {
  console.log('Launching browser for Visual QA...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Desktop QA
  await page.setViewport({ width: 1440, height: 900 });
  console.log(`Navigating to ${LOCAL_URL}...`);
  await page.goto(LOCAL_URL, { waitUntil: 'networkidle0', timeout: 30000 });

  console.log('Scrolling page to trigger lazy loaded images...');
  await scrollPage(page);

  console.log('Capturing clone desktop full screenshot...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'clone-desktop-1440.png'),
    fullPage: true
  });

  // Mobile QA
  await page.setViewport({ width: 390, height: 844 });
  await scrollPage(page);
  console.log('Capturing clone mobile full screenshot...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'clone-mobile-390.png'),
    fullPage: true
  });

  console.log('Visual QA screenshots saved successfully!');
  await browser.close();
}

main().catch(err => {
  console.error('Visual QA error:', err);
  process.exit(1);
});
