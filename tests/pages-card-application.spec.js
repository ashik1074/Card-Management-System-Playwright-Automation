import { test } from '@playwright/test';

import { login } from '../pages/login.page';
import { fillCardAppPage1 } from '../pages/cardApp.page1';
import { fillCardAppPage2 } from '../pages/cardApp.page2';
import { fillCardAppPage3 } from '../pages/cardApp.page3';
import { fillCardAppPage4 } from '../pages/cardApp.page4';
import { submitApplication } from '../pages/submit.page';

test('Card Application End-to-End', async ({ page }) => {
  await login(page);

  await fillCardAppPage1(page);
  await fillCardAppPage2(page);
  await fillCardAppPage3(page);
  await fillCardAppPage4(page);

  // Submit isolated
  await submitApplication(page);
});
