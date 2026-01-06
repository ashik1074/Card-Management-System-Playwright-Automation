// Import scheme test data
import { schemeData } from '../test-data/test.data';
import { applyZoom } from '../utils/zoomHelper';


// Creates a new Scheme
export async function createScheme(page) {
  await applyZoom(page); // Apply 70% zoom
  await page.getByText('System Configuration').click();
  await page.getByRole('link', { name: 'Scheme Setup' }).click();
  await page.getByRole('button', { name: ' Set Up Scheme' }).click();

  //await page.locator('#mat-select-value-2').click();
  //await page.getByRole('option', { name: 'metronic Visa U.S.A Inc. V001' }).click();
  await page.locator('mat-select[placeholder="Select Scheme"]').click();
  await page.getByRole('option', { name: schemeData.schemeName }).click();
  await page.getByRole('textbox', { name: 'Enter Network Process ID' })
    .fill('456');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
}
