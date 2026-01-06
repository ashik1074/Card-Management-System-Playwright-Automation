test.beforeEach(async ({ page }) => {
  await page.goto('http://banking-cms-123.konasl.net:10443/auth/login');       // ensure page is loaded
  await page.evaluate(() => {
    document.body.style.zoom = '70%';   // apply zoom globally
  });
});
