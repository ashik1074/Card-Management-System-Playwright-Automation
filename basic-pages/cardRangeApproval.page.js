// basic-pages/binApproval.page.js
import { clearOverlays, waitForUiStable } from '../utils/uiHelper';

// Approves Card Range creation task
export async function approveCardRange(page) {
  await page.getByText('Approval Management').click();
  await page.getByRole('link', { name: 'Task Panel' }).click();

  await page.getByRole('textbox', { name: 'Search by Event' })
    .fill('Card Range Creation');

  await page.getByRole('textbox', { name: 'Search by Event' }).press('Enter');

  await page.getByText('Card Range Creation').first().click();
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button', { name: 'Yes, Approve!' }).click();

  await waitForUiStable(page);                                    // wait for UI to settle
  await clearOverlays(page);                                 // clear any blocking overlays
}
