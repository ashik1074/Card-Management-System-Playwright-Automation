import { applyZoom } from '../utils/zoomHelper.js';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper.js';

// ✅ Import schemeSelection + binData from test data
import { schemeSelection, binData } from '../test-data/test.data.js';

// Creates a BIN
export async function createBIN(page) {
  await clearOverlays(page);       // ensure no dialog/backdrop blocking UI
  await waitForUiStable(page);     // allow Angular UI to settle

  await page.getByText('Product Management').click();                  // open Product Management
  await page.getByRole('link', { name: 'BIN Setup' }).click();         // open BIN Setup

  // Wait until BIN Setup page is ready
  await page.getByRole('button', { name: 'Set BIN' })
    .waitFor({ state: 'visible', timeout: 60000 });

  await applyZoom(page);           // apply 70% zoom after navigation

  await page.getByRole('button', { name: 'Set BIN' }).click();         // click Set BIN

  // -----------------------------
  // Step 1: Scheme / Country / Level / Product / Segment
  // -----------------------------

  await page.locator('mat-select[placeholder="Select Scheme"]').click();  // open Scheme dropdown
  await page.getByRole('option', { name: schemeSelection.name }).click(); // ✅ scheme from test data (mapped)

  await page.locator('mat-select[placeholder="Select Country Code"]').click(); // open Country dropdown
  await page.getByRole('option', { name: 'country AUT Austria' }).click();     // select country

  await page.locator('mat-select[placeholder="Select Scheme Level"]').click(); // open Scheme Level dropdown
  await page.locator('mat-option').first().click();          // select scheme level

  await page.locator('mat-select[placeholder="Select Product Type"]').click(); // open Product Type dropdown
  await page.getByRole('option', { name: binData.productType }).click();       // ✅ product type from test data

  await page.locator('mat-select[placeholder="Select Market Segment"]').click(); // open Market Segment dropdown
  await page.getByRole('option', { name: binData.marketSegment }).click();       // ✅ market segment from test data

  await page.getByRole('button', { name: 'Next Step' }).click();                // go to next step

  // -----------------------------
  // Step 2: BIN info
  // -----------------------------

  await page.getByRole('textbox', { name: 'Enter BIN Name' }).fill('Hola BIN'); // enter BIN name
  await page.getByPlaceholder('Enter BIN Length').fill('6');                    // enter BIN length
  await page.getByPlaceholder('Enter BIN Value').fill('456456');                // enter BIN value

  await page.locator('mat-select[placeholder="Select BIN Type"]').click();      // open BIN Type dropdown
  await page.getByRole('option', { name: binData.binType }).click();            // ✅ BIN type from test data

  await page.getByPlaceholder('Enter Service Code').fill('456');                // enter service code
  await page.getByRole('button', { name: 'Next Step' }).click();                // go to next step

  // -----------------------------
  // Step 3: Validity + Radio selection
  // -----------------------------

  await page.getByPlaceholder('Enter PAN Length').fill('14');                   // enter PAN length

  await page.getByRole('button', { name: 'Open calendar' }).click();            // open calendar
  await page.getByRole('button', { name: 'Choose month and year' }).click();    // open year selection
  await page.getByRole('button', { name: '2027' }).click();                     // select year
  await page.getByRole('button', { name: 'November' }).click();                 // select month
  await page.getByRole('button', { name: 'November 10,' }).click();             // select date

  // ✅ Radio selection from test data ("Yes" or "No")
  await page.getByRole('radio', { name: binData.radioOption }).check();         // select radio option

  await page.getByRole('button', { name: 'Next Step' }).click();                // next
  await page.getByRole('button', { name: 'Submit' }).click();                   // submit
}
