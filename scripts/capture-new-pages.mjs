import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3001';
const OUT_DIR = path.resolve('docs/qa-screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const pages = [
  { name: 'home-desktop', url: '/' },
  { name: 'traitements-desktop', url: '/traitements' },
  { name: 'cas-cliniques-desktop', url: '/cas-cliniques' },
  { name: 'a-propos-desktop', url: '/a-propos' },
  { name: 'blog-desktop', url: '/blog' },
  { name: 'contact-desktop', url: '/contact' },
];

async function main() {
  console.log('Launching Chrome for Visual QA...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const item of pages) {
    const fullUrl = BASE_URL + item.url;
    console.log(`Navigating to ${fullUrl}...`);
    try {
      await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await new Promise(r => setTimeout(r, 1000));
      const screenshotPath = path.join(OUT_DIR, `${item.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Saved screenshot: ${screenshotPath}`);
    } catch (err) {
      console.error(`Error capturing ${item.url}:`, err.message);
    }
  }

  await browser.close();
  console.log('Visual QA capture completed.');
}

main().catch(console.error);
