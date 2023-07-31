import{test,expect} from '@playwright/test'

test.use({
    storageState: 'auth.json'
  });

test('Validate logged in state', async ({ page }) => {

    await page.goto('https://make.wordpress.org/');
    await page.locator('#wp-admin-bar-my-account').isVisible(); //will see the admin bar when it is logged in
    
})
