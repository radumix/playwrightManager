const { test, expect } = require('@playwright/test');

test('Trigger Add User Button - Debugging Angular Webb Application', async ({page})=>{

    await page.goto('http://localhost:4200/login');
const pageTitle=page.title();

console.log('Page title is:', pageTitle);

const pageURL=page.url();
console.log('Page URL is:', pageURL);

 // Wait for the button to be visible and enabled
 await page.waitForSelector('#adduser', { state: 'visible' });

 // Hover over the button to confirm it is interactable
 await page.locator('#adduser').hover();

 // Click the button
 await page.locator('#adduser').click();

 // Optional: Validate any post-click behavior (UI changes, API calls, etc.)
 console.log('Add User button clicked.');


 const isVisible = await page.locator('#adduser').isVisible();
const isEnabled = await page.locator('#adduser').isEnabled();
console.log(`Button visible: ${isVisible}, enabled: ${isEnabled}`);


await page.close();

});