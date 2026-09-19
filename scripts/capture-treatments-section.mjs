import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001/#traitements', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));

  const section = await page.$('#traitements');
  if (section) {
    await section.screenshot({
      path: path.resolve('docs/qa-screenshots/services-section-cards.png')
    });
    console.log('Saved services section screenshot');
  }

  await browser.close();
}

main().catch(console.error);
