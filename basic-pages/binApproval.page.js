// basic-pages/binApproval.page.js
import { clearOverlays, waitForUiStable } from '../utils/uiHelper';

// Approves BIN creation task
export async function approveBIN(page) {
  await page.getByText('Approval Management').click();
  await page.getByRole('link', { name: 'Task Panel' }).click();

  await page.getByRole('textbox', { name: 'Search by Event' })
    .fill('BIN Creation');

  await page.getByRole('textbox', { name: 'Search by Event' }).press('Enter');

  await page.getByText('BIN Creation').first().click();
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button', { name: 'Yes, Approve!' }).click();

  await waitForUiStable(page);                                    // wait for UI to settle
  await clearOverlays(page);                                 // clear any blocking overlays
}
