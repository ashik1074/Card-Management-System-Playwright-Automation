// pages/cardApp.page3.js

import { expect } from '@playwright/test';
import { cardApplicationData } from '../test-data/card-application-data';
import { getRandomFullName } from '../test-data/randomize.utils';
import { get } from 'http';


export async function fillCardAppPage3(page) {
  // ✅ Scope everything to Page 3 so duplicate placeholders in other steps don’t conflict
  const page3 = page.locator('#cdk-stepper-0-content-2');
  await page3.waitFor({ state: 'visible', timeout: 60000 }); // wait until Page 3 is active

  //******************* Unique inputs (serialized by index) *********************/

  const referenceIdInputs = page3.locator('input[placeholder="Enter Reference ID"]');
  await expect(referenceIdInputs).toHaveCount(2);

  await referenceIdInputs
    .nth(0)
    .fill(cardApplicationData.references.applicationReferenceId); // random each run

  await referenceIdInputs
    .nth(1)
    .fill(cardApplicationData.references.referenceId); // random each run

  //******************* Product & Scheme selection (Mat-Select overlay-safe) *********************/

  // ✅ Material dropdown options appear in a global overlay (NOT inside page3)
  const overlay = page.locator('.cdk-overlay-container'); // global overlay container

  await page
  .getByLabel('Product & Bank Information')
  .getByText('Select Product', { exact: true })
  .click();
  // const productDropdown = page3.getByRole('combobox').first();
  // await expect(productDropdown).toBeVisible({ timeout: 10000 });
  // await productDropdown.click();
  //await overlay.getByRole('listbox').waitFor({ state: 'visible', timeout: 60000 });

  const productOption = page.getByRole('option', {
  name: cardApplicationData.productAndScheme.productName,
  exact: true,
});

  await expect(productOption).toBeVisible({ timeout: 10000 });
  await productOption.click();

  
  const schemeDropdown = page
  .getByLabel('Product & Bank Information')
  .getByText('Select Scheme', { exact: true });

  await expect(schemeDropdown).toBeVisible({ timeout: 10000 });
  await schemeDropdown.click();

  const schemeOption = page.getByRole('option', {
    name: cardApplicationData.productAndScheme.schemeName,
    exact: true,
  });

  await expect(schemeOption).toBeVisible({ timeout: 10000 });
  await schemeOption.click();

  //******************* Other fields *********************/

  // Filling embossing name
  await page3.getByRole('textbox', { name: 'Enter Embossing Name' }).fill(getRandomFullName().toUpperCase());

  // Filling annual income (radio checks)
  // await page3.locator('#mat-radio-19-input').check();
  // await page3.locator('#mat-radio-21-input').check();


  // Branch selection (also a mat-select overlay)
  const branchDropdown = await page.getByLabel('Product & Bank Information').getByText('Select Branch', { exact: true });
  await expect(branchDropdown).toBeVisible({ timeout: 10000 });
  await branchDropdown.click();

  await page.getByRole('option', { name: 'Mirpur Branch' }).click(); // Selecting Mirpur Branch as an example


  // Application Date selection
  await page.getByRole('textbox', { name: 'Select Application Date' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2025' }).click();
  await page.getByRole('button', { name: 'December' }).click();
  await page.getByRole('button', { name: 'December 1,' }).click();

  // Filling role
  await page3.getByRole('textbox', { name: 'Enter Role' }).fill('Executive');

  //await page.locator('#cdk-stepper-0-content-2 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(3) > .mb-4.row > formly-field:nth-child(4) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  
  const issuancePriorityDropdown = page
  .getByLabel('Product & Bank Information')
  .getByText('Select Issuance Priority', { exact: true });

  await expect(issuancePriorityDropdown).toBeVisible({ timeout: 10000 });
  await issuancePriorityDropdown.click();
  
  await page.getByRole('option', { name: 'Regular' }).click();
  //await page.pause();

  // Proceeding to next step
  await page3.getByRole('button', { name: 'Next Step' }).click();
}
