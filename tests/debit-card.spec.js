import { test } from '@playwright/test';
import { login } from '../pages/login.page';
import { DebitCardPage1 } from '../Debit-Card-Pages/DebitCardPage1';
import { DebitCardPage2 } from '../Debit-Card-Pages/DebitCardPage2';
import { DebitCardPage3 } from '../Debit-Card-Pages/DebitCardPage3';

test('Create debit card application', async ({ page }) => {
  const debitCardPage1 = new DebitCardPage1(page);
  const debitCardPage2 = new DebitCardPage2(page);
  const debitCardPage3 = new DebitCardPage3(page);


  await login(page); // ✅ automatically uses activeEnvKey from test data

  await debitCardPage1.openNewDebitCardApplication();
  await debitCardPage1.fillPage1();
  await debitCardPage2.fillPage2();
  await debitCardPage3.fillPage3();

  await page.pause();
});