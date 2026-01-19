// pages/cardApp.page3.js

import { expect } from '@playwright/test';
import { cardApplicationData } from '../test-data/card-application-data';

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

  // -------- Product selection --------
  await page3.locator('#mat-select-value-61').click(); // open Product dropdown

  // wait until dropdown options are rendered in overlay
  await overlay.getByRole('listbox').waitFor({ state: 'visible', timeout: 60000 });

  // click product option from overlay (NOT from page3)
  await overlay.getByRole('option', {
    name: cardApplicationData.productAndScheme.productName,
    exact: true,
  }).click();

  // -------- Scheme selection --------
  await page3.locator('#mat-select-value-62').click(); // open Scheme dropdown
  await overlay.getByRole('listbox').waitFor({ state: 'visible', timeout: 60000 });

  await overlay.getByRole('option', {
    name: cardApplicationData.productAndScheme.schemeName,
    exact: true,
  }).click();

  //******************* Other fields *********************/

  // Filling embossing name
  await page3.getByRole('textbox', { name: 'Enter Embossing Name' }).fill('EMBOSS ');

  // Filling annual income (radio checks)
  await page3.locator('#mat-radio-19-input').check();
  await page3.locator('#mat-radio-21-input').check();

  // Branch selection (also a mat-select overlay)
  await page3.locator('#mat-select-value-63').click();
  await overlay.getByRole('listbox').waitFor({ state: 'visible', timeout: 60000 });
  await overlay.getByRole('option', { name: 'Banani Branch', exact: true }).click();

  // (Kept) focus optional input (if required by UI)
  //await page3.locator('#mat-input-160').click();


  // Date selection
  await page.getByRole('textbox', { name: 'Select Application Date' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2025' }).click();
  await page.getByRole('button', { name: 'December' }).click();
  await page.getByRole('button', { name: 'December 1,' }).click();

  // Filling role
  await page3.getByRole('textbox', { name: 'Enter Role' }).fill('demo role');

  // Proceeding to next step
  await page3.getByRole('button', { name: 'Next Step' }).click();
}
