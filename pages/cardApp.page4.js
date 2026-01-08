export async function fillCardAppPage4(page) {
  //Photo ID selection and filling ID number
  await page.getByLabel('Nominee Information').getByText('Select Photo ID Type').click();
  await page.getByRole('option', { name: 'National ID' }).click();
  //Enter Photo ID Number
  await page.getByRole('textbox', { name: 'Enter Photo ID Number' }).click(); 
  await page.getByRole('textbox', { name: 'Enter Photo ID Number' }).fill('7478474744');
 //Nominee Details
  await page.locator('#mat-select-value-95').click();
  await page.getByRole('option', { name: 'Mr', exact: true }).click();
  //Filling nominee name
  await page.getByRole('textbox', { name: 'Enter Full Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Full Name' }).fill('ashikur r');
  //Filling father's and mother's name
  await page.getByRole('textbox', { name: 'Enter Father\'s Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Father\'s Name' }).fill('ashikur father');
  await page.getByRole('textbox', { name: 'Enter Father\'s Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Mother\'s Name' }).fill('ashikur mother');

  //Date selection
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2004' }).click();
  await page.getByRole('button', { name: 'May' }).click();
  await page.getByRole('button', { name: 'May 2,' }).click();
  //Gender
  await page.locator('#mat-select-value-96').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  //Nationality selection
  await page.getByRole('textbox', { name: 'Enter Nationality' }).click();
  await page.getByRole('textbox', { name: 'Enter Nationality' }).fill('bengali');
  //Relation selection
  await page.locator('#cdk-stepper-0-content-3 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field > ksl-field-group-repeat > div > div > formly-field > formly-group > formly-field > .mb-15 > formly-field:nth-child(10) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByRole('option', { name: 'Spouse' }).click();
  //Percentage selection
  await page.getByRole('tabpanel', { name: 'Nominee Information' }).getByPlaceholder('Enter Percentage').click();
  await page.getByRole('tabpanel', { name: 'Nominee Information' }).getByPlaceholder('Enter Percentage').fill('100');
  await page.getByRole('textbox', { name: 'Enter Personal Contact Number' }).click();
  //Filling personal contact number
  await page.getByRole('textbox', { name: 'Enter Personal Contact Number' }).fill('0123456789');
  //Filling address details
  await page.locator('#cdk-stepper-0-content-3 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > formly-group > formly-field > ksl-field-group-repeat > div > div > formly-field > formly-group > formly-field > .mb-15 > formly-field:nth-child(14) > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByRole('option', { name: 'Present Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('address line11');
  //Radio button selection for allowing address for communication
  await page.getByRole('radio', { name: 'Yes' }).check();
  //Proceeding to next step
  await page.getByRole('button', { name: 'Next Step' }).click();

  //>>>>>>>>>>>>>>>> NO submit here<<<<<<<<<<<<<<<<<<<<<<<<<
}
