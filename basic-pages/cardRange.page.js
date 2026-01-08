// basic-pages/cardRange.page.js
import { clearOverlays, waitForUiStable } from '../utils/uiHelper';

// Creates Card Range
export async function createCardRange(page) {

  await clearOverlays(page);                                      // ensure no dialog/backdrop
  await waitForUiStable(page);

  await page.getByText('Product Management').click();
  await page.getByRole('link', { name: 'Card Range Setup' }).click();

    await page.getByRole('button', { name: 'Set Card Range' }).waitFor({ state: 'visible', timeout: 60000 });
    // ✅ Assert the Card Range Setup page is really open (prevents “stuck”)

  await page.getByRole('button', { name: 'Set Card Range' }).click();
  await page.getByRole('textbox', { name: 'Enter Range Name' }).fill('aaa');

  await page.locator('mat-select[placeholder="Select BIN"]').click();

  await page.getByRole('option', { name: 'bin 456456 Hola BIN' }).click();

  await page.getByPlaceholder('Enter Value').nth(0).fill('00000000');
  await page.getByPlaceholder('Enter Value').nth(1).fill('00000999');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
}
