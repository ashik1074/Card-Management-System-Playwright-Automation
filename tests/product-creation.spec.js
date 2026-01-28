// tests/product-before.spec.js
import { test } from '@playwright/test';
import { beforeData, productBeforeData } from '../test-data/product.data.js';
import { saveRuntime } from '../utils/runtime.store.js';

test('Product Before Test (Copy BIN + Scheme + others and save)', async ({ page }) => {
  // ---------------------- Helpers ----------------------

  // ✅ Read a details value by label text (stable)
  async function readDetailsValue(labelText) {
    const loc = page
      .getByText(labelText, { exact: true }) // label: "Scheme", "Country Code", etc.
      .locator('..')                        // go to label container
      .locator('xpath=following-sibling::div') // go to value container
      .locator('div.text-gray-500.fw-500.text-truncate');

    return (await loc.innerText()).trim();
  }

  // ---------------------- Start ----------------------

  // ✅ Go to Card Range List page (will redirect to login if not logged in)
  await page.goto(productBeforeData.rangeListUrl);

  // ✅ Login
  await page.getByRole('textbox', { name: 'Enter Email' }).fill(productBeforeData.credentials.email);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(productBeforeData.credentials.password);
  await page.getByRole('button', { name: 'Log In' }).click();

  // ✅ Search Card Range by name
  await page.getByRole('textbox', { name: 'Search by Card Range Name' }).fill(productBeforeData.cardRangeName);
  await page.getByRole('textbox', { name: 'Search by Card Range Name' }).press('Enter');

  // ✅ Click first row/cell from result list
  await page.getByRole('cell').first().click();

  // ✅ Copy BIN value from the details page
  const copiedBINValue = (
    await page
      .locator('div.col-md-6 div.text-gray-500.fw-500.text-truncate')
      .nth(1)
      .innerText()
  ).trim();

  console.log('✅ Copied BIN Value:', copiedBINValue);

  // ✅ Go to BIN Setup and search by copied BIN
  await page.getByRole('link', { name: 'BIN Setup' }).click();
  await page.locator('[id="#settings"]').click();

  await page.getByRole('textbox', { name: 'BIN Number' }).fill(copiedBINValue);
  await page.getByRole('textbox', { name: 'BIN Number' }).press('Enter');

  // ✅ Click first result row/cell (no hard-coded name like BANK-)
  await page.getByRole('cell').first().click();

  // ✅ Copy all values from BIN details
  const copiedData = {
    // what you searched
    cardRangeName: productBeforeData.cardRangeName,

    // copied runtime values
    binValue: copiedBINValue,
    scheme: await readDetailsValue('Scheme'),
    countryCode: await readDetailsValue('Country Code'),
    productType: await readDetailsValue('Product Type'),
    marketSegment: await readDetailsValue('Market Segment'),
    binCurrency: await readDetailsValue('BIN Currency'),
    binType: await readDetailsValue('BIN Type'),
    settlementCurrency: await readDetailsValue('Settlement Currency'),
    schemeLevel: await readDetailsValue('Scheme Level'),
    foreignCurrency: await readDetailsValue('Foreign Currency'),
  };

  // ✅ Print for confirmation
  console.log('✅ Copied BIN Details:', copiedData);

  // ✅ Save to JSON so Product Create test can reuse later (even in another run)
  saveRuntime(productBeforeData.runtimeFilePath, copiedData);
  console.log(`✅ Saved runtime data to: ${productBeforeData.runtimeFilePath}`);
});


// test('Product Creation & Approval', async ({ page }) => {
//   await login(page);

//   const productName = await createProduct(page);
//   console.log(`✅ Product created: ${productName}`);

//   await approveProduct(page);

//   // await page.pause(); // optional debug
// });