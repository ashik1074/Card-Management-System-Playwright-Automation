// tests/policy-management.spec.js
import { test } from '@playwright/test';

import { login } from '../policy-pages/auth.page';
import { createPinPolicy } from '../policy-pages/pinPolicy.create.page';
import { approvePinPolicy } from '../policy-pages/pinPolicy.approve.page';

test('PIN Policy Creation and Approval', async ({ page }) => {
  await login(page);

  const policyName = await createPinPolicy(page);
  console.log('✅ Created Policy:', policyName);

  await approvePinPolicy(page);

  await page.pause(); // optional debug
});
