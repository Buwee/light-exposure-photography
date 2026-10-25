const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200');
  
  console.log('--- PAGE TITLE ---');
  console.log(await page.title());
  
  console.log('\n--- SEARCHING FOR NAV ---');
  const nav = await page.locator('nav').first();
  if (await nav.count() > 0) {
    console.log('SUCCESS: <nav> element found!');
    console.log('Text content:', await nav.innerText());
    console.log('Bounding box:', await nav.boundingBox());
    console.log('Computed styles:', await page.evaluate(() => {
      const el = document.querySelector('nav');
      return window.getComputedStyle(el).cssText;
    }));
  } else {
    console.log('FAILURE: <nav> element NOT found in DOM.');
  }

  console.log('\n--- SEARCHING FOR APP-NAVBAR ---');
  const appNav = await page.locator('app-navbar').first();
  if (await appNav.count() > 0) {
    console.log('SUCCESS: <app-navbar> element found!');
  } else {
    console.log('FAILURE: <app-navbar> element NOT found in DOM.');
  }

  await browser.close();
})();
