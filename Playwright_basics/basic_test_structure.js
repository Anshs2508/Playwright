//BASIC TEST STRUCTURE OF PLAYWRHIGHT:
//JavaScript:-

const {test, expect} = require('@playwright/test');
test ('test', async ({page})) =>
  {
      await page.goto ('https://example.com');  
  }
);
