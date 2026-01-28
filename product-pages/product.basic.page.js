// product-pages/product.basic.page.js
import { productData } from '../test-data/product.data.js';
import { binData } from '../test-data/schemeBinCardRange.data.js';

export async function fillProductBasic(page, productName) {
  // Open creation modal/page
  await page.getByRole('button', { name: 'Set Product' }).click(); // open product create

  // Product name
  await page.getByRole('textbox', { name: 'Enter Product Name' }).fill(productName); // fill name

  // Description (optional field)
  const descriptionInput = page.getByRole('textbox', { name: 'Enter Description' });
  if (await descriptionInput.count()) {
    await descriptionInput.fill(productData.description); // fill description
  }

  // Market Segment (from binData)
  await page.getByLabel('Product Basic').getByText('Select Market Segment').click(); // open dropdown
  await page.getByRole('option', { name: productData.market_Segment }).click(); // select option

  // Currency (from binData)
  await page.getByLabel('Product Basic').getByText('Select Currency').click(); // open dropdown
  await page.getByRole('option', { name: productData.bin_Currency }).click(); // select option
  // Product Type (from binData)
  await page.getByLabel('Product Basic').getByText('Select Product Type').click(); // open dropdown
  await page.getByRole('option', { name: productData.product_Type }).click(); // select option

  // Expiry date selection
  await page.getByRole('button', { name: 'Open calendar' }).click(); // open calendar
  await page.getByRole('button', { name: 'Choose month and year' }).click(); // switch to month/year view
  await page.getByRole('button', { name: productData.expiry.year }).click(); // choose year
  await page.getByRole('button', { name: productData.expiry.month }).click(); // choose month
  await page.getByRole('button', { name: productData.expiry.dayText }).click(); // choose day

  if (productData.foreign_Currency === 'Yes') {
    await page.locator('#mat-radio-0 label.mdc-label').click(); // clicks "Yes" label
  } else if (productData.foreign_Currency === 'No') {
    await page.locator('#mat-radio-1 label.mdc-label').click(); // clicks "No" label
  }


  // Allow Foreign Currency (Yes/No from binData)
//   await page.getByText(binData.radioOption).click(); // click Yes/No
//   await page.getByRole('radio', { name: binData.radioOption }).check();

  // Card mode
  await page.getByLabel('Product Basic').getByText('Select how this card will be').click(); // open dropdown
  await page.getByRole('option', { name: productData.cardTypeMode }).click(); // select option

  // Card validity duration
  await page
    .getByRole('tabpanel', { name: 'Product Basic' })
    .getByPlaceholder('Enter Card Validity Duration')
    .fill(productData.cardValidityDuration); // fill validity

  // Extra radio after validity
  await page.locator('#mat-radio-5').getByText(productData.someRadioAfterValidity).click(); // click Yes/No

  // Move to Policies step
  await page.getByRole('button', { name: 'Next Step' }).click(); // go next
}
