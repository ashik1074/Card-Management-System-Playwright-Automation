
// policy-pages/pinPolicy.approve.page.js
import { pinPolicyData } from '../test-data/policy.data';

export async function approvePinPolicy(page) {
  await page.getByText('Approval Management').click();

  const taskPanel = page.getByRole('link', { name: 'Task Panel' });
  await taskPanel.waitFor({ state: 'visible', timeout: 60000 });
  await taskPanel.click();

  await page
    .getByRole('textbox', { name: 'Search by Event' })
    .fill(pinPolicyData.approvalSearchEvent);

  await page
    .getByRole('textbox', { name: 'Search by Event' })
    .press('Enter');

  await page.getByText('PIN Policy Creation').first().click();
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button', { name: 'Yes, Approve!' }).click();
}
