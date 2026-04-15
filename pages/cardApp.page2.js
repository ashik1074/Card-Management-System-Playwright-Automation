import { generateRandomIdNumber } from '../test-data/schemeBinCardRange.data.js';
import { generateRandomFatherName } from '../test-data/randomize.utils.js';
export async function fillCardAppPage2(page) {
  //ID Type selection
  await page.locator('div').filter({ hasText: /^Select ID Type$/ }).nth(5).click();
  await page.getByRole('option', { name: 'Passport' }).click();
  await page.getByRole('textbox', { name: 'Enter ID Number' }).fill(generateRandomIdNumber(10));

  //Filling ID number
const randomIdNumber = generateRandomIdNumber(10);

// Fill the ID Number field
await page
  .getByRole('textbox', { name: 'Enter ID Number' }) // locate field
  .fill(randomIdNumber); 

    //Address details
  // await page.locator('#mat-select-value-38').click();
  // await page.getByRole('option', { name: 'Present Address' }).click();

     //await page.pause();

  // //Filling care of name
  // await page.getByRole('textbox', { name: 'Enter Name' }).click();
  // await page.getByRole('textbox', { name: 'Enter Name' }).fill(generateRandomFatherName());
  // //Filling address line 1
  // await page.getByRole('textbox', { name: 'Enter Address Line 1' }).click();
  // await page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('House 45, Maple Avenue');
  // await page.getByRole('textbox', { name: 'Enter Zip/Postal Code' }).fill(generateRandomIdNumber(5));
  // //Radio button selection for allowing address for communication
  // //await page.getByRole('radio', { name: 'Yes' }).check();
  // await page.getByRole('radio', { name: 'Residence Address' }).check();
  //Proceeding to next step

  await page.locator('#mat-input-101').click();
  await page.locator('#mat-input-101').fill('South Badda');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(4) > .row > formly-field:nth-child(3) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(4) > .row > formly-field:nth-child(4) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByRole('option', { name: 'Dhaka' }).click();
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(4) > .row > formly-field:nth-child(5) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.locator('#mat-input-103').fill('Gulshan Police Station');
  await page.locator('#mat-input-104').click();
  await page.locator('#mat-input-104').fill('1206');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').first().click();
  await page.locator('.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined.mdc-text-field--no-label.mdc-text-field--focused').click();
  await page.locator('#mat-input-107').fill('Laksham Road');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field:nth-child(3) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field:nth-child(4) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.getByText('Comilla').click();
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field:nth-child(5) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.locator('#mat-input-109').fill('Comilla Sadar');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field:nth-child(6) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.locator('#mat-input-110').fill('3500');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(9) > .row > formly-field > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').first().click();
  await page.locator('#mat-input-111').fill('Wireless Mor');
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(9) > .row > formly-field:nth-child(3) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();
  await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(9) > .row > formly-field:nth-child(4) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  await page.getByRole('option', { name: 'Dhaka' }).click();
  await page.locator('#mat-input-113').click();
  await page.locator('#mat-input-113').fill('Mohakhali');

  //await page.locator('#mat-input-113').press('Tab');
  //await page.locator('.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined.mdc-text-field--no-label.mdc-text-field--invalid.mdc-text-field--focused').click();
  // await page.locator('#mat-input-114').fill('3500');
  await page.getByRole('radio', { name: 'Residence Address' }).check();

  await page.locator('input[placeholder="Enter Zip/Postal Code"]:visible').last().fill(generateRandomIdNumber(5));
  
  //await page.pause();



  // await page.locator('#mat-mdc-error-3').getByText('Area/Police Station is').click();
  // await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(4) > .row > formly-field:nth-child(5) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  // await page.locator('#mat-input-102').fill('Gulshan');
  // await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').first().click();
  // await page.locator('#mat-input-106').fill('Line1 address');
  // await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(7) > .row > formly-field:nth-child(5) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  // await page.locator('#mat-input-108').fill('Sadar');
  // await page.locator('#cdk-stepper-0-content-1 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field:nth-child(9) > .row > formly-field:nth-child(5) > formly-field-ksl-input > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click();
  // await page.locator('#mat-input-112').fill('Banani');
  // await page.locator('#mat-input-100').click();
  // await page.locator('#mat-input-100').fill('Line1 Residence');


  await page.getByRole('button', { name: 'Next Step' }).click();

}
