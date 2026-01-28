// product-pages/product.approve.page.js
import { productData } from '../test-data/product.data.js';

export async function approveProduct(page) {
  await page.getByText('Approval Management').click();
  await page.getByRole('link', { name: 'Task Panel' }).click();

  await page.getByRole('textbox', { name: 'Search by Event' }).fill(productData.approvalEventSearch);
  await page.getByRole('textbox', { name: 'Search by Event' }).press('Enter');

  await page.getByRole('cell', { name: productData.approvalRowText }).click();
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('button', { name: 'Yes, Approve!' }).click();
}
