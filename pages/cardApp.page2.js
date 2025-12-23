export async function fillCardAppPage2(page) {
    //National ID selection
  await page.locator('#mat-select-37').click();
  await page.getByRole('option', { name: 'National ID' }).click();

  //Filling ID number
  await page.getByRole('textbox', { name: 'Enter ID Number' })
    .fill('7808257443');

    //Address details
  await page.locator('#mat-select-value-38').click();
  await page.getByRole('option', { name: 'Present Address' }).click();

  //Filling care of name
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Care of name');
  //Filling address line 1
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('address line 1');
  //Radio button selection for allowing address for communication
  await page.getByRole('radio', { name: 'Yes' }).check();

  //Proceeding to next step
  await page.getByRole('button', { name: 'Next Step' }).click();

}
