import { applyZoom } from '../utils/zoomHelper';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper'; 

// Creates a BIN
export async function createBIN(page) {
  await clearOverlays(page);                                      // ensure no dialog/backdrop
  await waitForUiStable(page);   

  await page.getByText('Product Management').click();
  await page.getByRole('link', { name: 'BIN Setup' }).click();

  await page.getByRole('button', { name: 'Set BIN' }).waitFor({ state: 'visible', timeout: 60000 });

    // ✅ Assert the BIN Setup page is really open (prevents “stuck”)
  await applyZoom(page); // Apply 70% zoom

  await page.getByRole('button', { name: 'Set BIN' }).click();
  await page.locator('mat-select[placeholder="Select Scheme"]').click();
  await page.getByRole('option', { name: 'scheme Visa U.S.A Inc.' }).click();
  await page.locator('mat-select[placeholder="Select Country Code"]').click();
  await page.getByRole('option', { name: 'country AUT Austria' }).click();
  await page.locator('mat-select[placeholder="Select Scheme Level"]').click();
  await page.getByRole('option', { name: 'Visa Platinum' }).click();
  await page.locator('mat-select[placeholder="Select Product Type"]').click();
  await page.getByRole('option', { name: 'Credit' }).click();
  await page.locator('mat-select[placeholder="Select Market Segment"]').click(); 
  await page.getByRole('option', { name: 'Consumer' }).click();
  await page.getByRole('button', { name: 'Next Step' }).click();

  await page.getByRole('textbox', { name: 'Enter BIN Name' }).fill('Hola BIN');
  await page.getByPlaceholder('Enter BIN Length').fill('6');
  await page.getByPlaceholder('Enter BIN Value').fill('456456');
  
  await page.locator('mat-select[placeholder="Select BIN Type"]').click();
  await page.getByRole('option', { name: ' Issuer BIN ' }).click();
  await page.getByPlaceholder('Enter Service Code').fill('456');
  await page.getByRole('button', { name: 'Next Step' }).click();
  
  await page.getByPlaceholder('Enter PAN Length').fill('14');
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2027' }).click();
  await page.getByRole('button', { name: 'November' }).click();
  await page.getByRole('button', { name: 'November 10,' }).click();

  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
}
