// basic-pages/cardRange.page.js

import { clearOverlays, waitForUiStable } from '../utils/uiHelper';
import { binData, cardRangeData } from '../test-data/schemeBinCardRange.data.js';

export async function createCardRange(page) {
  await clearOverlays(page); // ensure no dialog/backdrop
  await waitForUiStable(page);

  await page.getByText('Product Management').click(); // open menu
  await page.getByRole('link', { name: 'Card Range Setup' }).click(); // go to Card Range page

  // Wait until the Card Range page is really ready
  await page.getByRole('button', { name: 'Set Card Range' }).waitFor({
    state: 'visible',
    timeout: 60000,
  });

  await page.getByRole('button', { name: 'Set Card Range' }).click(); // start creating card range

  // ✅ Random range name every run (from test data)
  await page
    .getByRole('textbox', { name: 'Enter Range Name' })
    .fill(cardRangeData.rangeName);

  // ✅ Angular Material options appear in overlay, not inside the page
  const overlay = page.locator('.cdk-overlay-container');

  // Open BIN dropdown
  await page.locator('mat-select[placeholder="Select BIN"]').click();

  // Wait for listbox to appear in overlay
  await overlay.getByRole('listbox').waitFor({ state: 'visible', timeout: 60000 });

  // ✅ Select the BIN created earlier (using binValue from test data)
  // This matches any option text that contains the bin value (e.g. "bin 456456 Hola BIN" or just "456456")
  await overlay
    .getByRole('option', { name: new RegExp(binData.binValue) })
    .first()
    .click();

  // Fill start/end range values (kept as your original)
  await page.getByPlaceholder('Enter Value').nth(0).fill(cardRangeData.minValue); // range start
  await page.getByPlaceholder('Enter Value').nth(1).fill(cardRangeData.maxValue); // range end

  await page.getByRole('button', { name: 'Next' }).click(); // go next
  await page.getByRole('button', { name: 'Submit' }).click(); // submit card range 
}
