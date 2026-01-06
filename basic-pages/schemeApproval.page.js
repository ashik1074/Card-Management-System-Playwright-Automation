
// basic-pages/binApproval.page.js
import { clearOverlays, waitForUiStable } from '../utils/uiHelper';

import { applyZoom } from '../utils/zoomHelper';

// Approves Scheme creation task
export async function approveScheme(page) {
    await applyZoom(page); // Apply 70% zoom

  await page.getByText('Approval Management').click();
  await page.getByRole('link', { name: 'Task Panel' }).click();

  await page.getByRole('textbox', { name: 'Search by Event' })
    .fill('Scheme Creation');

  await page.getByRole('textbox', { name: 'Search by Event' }).press('Enter');

  await page.getByText('Scheme Creation').first().click();
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button', { name: 'Yes, Approve!' }).click();

  await waitForUiStable(page);                                    // wait for UI to settle
  await clearOverlays(page);                                      // remove potential blocking overlay
}
