import { applyZoom } from '../utils/zoomHelper.js';
// policy-pages/pinPolicy.create.page.js
import {
  pinPolicyData,
  generateRandomPolicyName,
} from '../test-data/policy.data';

export async function createPinPolicy(page) {
  const policyName = generateRandomPolicyName(
    pinPolicyData.policyNamePrefix
  );

  await page.getByText('Policy Management').click();
  await page.getByRole('link', { name: 'PIN Policy' }).click();
  await page.getByRole('button', { name: 'Create PIN Policy' }).click();

  await applyZoom(page); 

  await page
    .getByRole('textbox', { name: 'Enter Policy Name' })
    .fill(policyName);

  await page.getByPlaceholder('Enter PIN Length').fill(pinPolicyData.pinLength);
  await page.getByPlaceholder('Enter Count').fill(pinPolicyData.reuseCount);

  await page.locator('#mat-radio-1-input').check();

  await page.getByText('Select Reset Frequency Type').click();
  await page
    .getByRole('option', { name: pinPolicyData.resetFrequencyType })
    .click();

  await page
    .getByPlaceholder('Enter Free Reset Limit')
    .fill(pinPolicyData.freeResetLimit);

  await page.locator('#mat-radio-4-input').check();
  await page.locator('#mat-radio-2-input').check();

  await page
    .getByPlaceholder('Enter Number of Attempts')
    .fill(pinPolicyData.numberOfAttempts);

  await page.getByText('Enter Block Duration Type').click();
  await page
    .getByRole('option', { name: pinPolicyData.blockDurationType })
    .click();

  await page
    .getByPlaceholder('Enter Block Duration Value')
    .fill(pinPolicyData.blockDurationValue);

  await page.locator('#mat-radio-6').getByText('Yes').click();
  await page.locator('#mat-radio-8').getByText('Yes').click();
  await page.locator('#mat-radio-10').getByText('Yes').click();
  await page.locator('#mat-radio-12 > .mdc-form-field > .mdc-label').click();

  await page.getByText('Select Offset Generation Rule').click();
  await page
    .getByRole('option', { name: pinPolicyData.offsetGenerationRule })
    .click();

  await page.getByText('Select PIN Delivery Method').click();
  await page
    .getByRole('option', { name: pinPolicyData.pinDeliveryMethod })
    .click();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  return policyName;
}
