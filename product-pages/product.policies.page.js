// product-pages/product.policies.page.js
import { productData } from '../test-data/product.data.js';

export async function fillProductPolicies(page) {
  // Choose PIN Policy
  await page
    .getByRole('tabpanel', { name: 'Policies' })
    .getByPlaceholder('Choose PIN Policy')
    .click(); // open policy dropdown

  await page.getByRole('Option').first().click();

  //await page.getByRole('option', { name: productData.pinPolicyName }).click(); // select policy
  await page.getByLabel('Policies').getByRole('button', { name: 'Add Policy' }).click(); // add policy

  // NFC Control section
  await page.getByRole('button', { name: 'NFC Control' }).click(); // open NFC control
  await page.getByRole('radio', { name: productData.nfcControlOption }).check(); // select Yes/No

  // Move to Scheme Enrollment step
  await page.getByRole('button', { name: 'Next Step' }).click(); // go next
}
