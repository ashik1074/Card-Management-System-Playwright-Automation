// product-pages/product.schemeEnrollment.page.js
import { productData } from '../test-data/product.data.js';
import { binData, cardRangeData, schemeSelection } from '../test-data/schemeBinCardRange.data.js';

export async function fillSchemeEnrollmentAndSubmit(page) {
  // Select Scheme
  await page.getByLabel('Scheme Enrollment').getByText('Select Scheme').click(); // open dropdown
  await page.getByRole('option', { name: productData.scheme_Name }).click(); // select scheme
   await page.getByRole('Option').first().click();

  // Select BIN
  await page.getByLabel('Scheme Enrollment').getByText('Select BIN').click(); // open dropdown
   await page.getByRole('Option').first().click();

   // Select Card Range
  await page.getByLabel('Scheme Enrollment').getByText('Choose Card Range').click(); // open dropdown
   await page.getByRole('Option').first().click();
  //await page.getByRole('option', { name: cardRangeData.rangeName }).click(); // select card range

  // Next step(s) + Submit
  await page.getByRole('button', { name: 'Next Step' }).click(); // go next
  await page.getByRole('button', { name: 'Next Step' }).click(); // go next
  //await page.pause();
  await page.getByRole('button', { name: 'Submit' }).click(); // submit
}
