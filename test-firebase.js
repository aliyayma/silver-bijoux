const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
  page.on('requestfailed', request =>
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText)
  );

  console.log('Navigating to admin.html...');
  await page.goto('http://localhost:3000/admin.html', { waitUntil: 'networkidle2' });
  
  console.log('Navigating to checkout.html...');
  await page.goto('http://localhost:3000/checkout.html', { waitUntil: 'networkidle2' });
  
  // Click on the checkout button to see if it throws
  await page.evaluate(() => {
    if (window.FirebaseDB) {
        console.log("window.FirebaseDB is defined.");
    } else {
        console.error("window.FirebaseDB is UNDEFINED!");
    }
  });

  await browser.close();
})();
