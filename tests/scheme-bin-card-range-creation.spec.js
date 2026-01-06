import { test } from '@playwright/test';

import { login } from '../basic-pages/login.page';
import { createScheme } from '../basic-pages/scheme.page';
import { approveScheme } from '../basic-pages/schemeApproval.page';
import { createBIN } from '../basic-pages/bin.page';
import { approveBIN } from '../basic-pages/binApproval.page';
import { createCardRange } from '../basic-pages/cardRange.page';
import { approveCardRange } from '../basic-pages/cardRangeApproval.page';

test('Scheme → BIN → Card Range creation & approval', async ({ page }) => {

  //To Pause the test for debugging, place it after the function where needed.  
  //                     ↓
  //                     ↓
  //           await page.pause();

  await login(page);               // Login
  await createScheme(page);        // Create Scheme
  await approveScheme(page);       // Approve Scheme

  await createBIN(page);           // Create BIN
  await approveBIN(page);          // Approve BIN

  await createCardRange(page);     // Create Card Range
  await approveCardRange(page);    // Approve Card Range

  await page.pause();              // Debug pause (optional)

  
});
