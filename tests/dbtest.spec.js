import { test, expect } from '@playwright/test';
import { queryDb } from '../utils/db.helper';

test('Validate application saved in DB', async ({ page }) => {

  // UI actions
  await page.goto('http://banking-cms-123.konasl.net:10443/auth/login');
  //await page.pause();
  await page.getByText('Submit').click();

  // DB validation
  const rows = await queryDb(
    "select * from cpms.card_range where range_name='CR-931080-7611';",
    ['CR-931080-7611']
  );

  expect(rows[0].status).toBe('SUBMITTED');
});
