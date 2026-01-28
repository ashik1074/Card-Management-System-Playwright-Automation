import { generateRandomIdNumber } from '../test-data/schemeBinCardRange.data.js';
import { generateRandomFatherName } from '../test-data/randomize.utils.js';
export async function fillCardAppPage2(page) {
    //National ID selection
  await page.locator('#mat-select-37').click();
  await page.getByRole('option', { name: ' Passport ' }).click();

  //Filling ID number
const randomIdNumber = generateRandomIdNumber(10);

// Fill the ID Number field
await page
  .getByRole('textbox', { name: 'Enter ID Number' }) // locate field
  .fill(randomIdNumber); 

    //Address details
  await page.locator('#mat-select-value-38').click();
  await page.getByRole('option', { name: 'Present Address' }).click();

  //Filling care of name
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill(generateRandomFatherName());
  //Filling address line 1
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('House 45, Maple Avenue');
  //Radio button selection for allowing address for communication
  await page.getByRole('radio', { name: 'Yes' }).check();

  //Proceeding to next step
  await page.getByRole('button', { name: 'Next Step' }).click();

}
