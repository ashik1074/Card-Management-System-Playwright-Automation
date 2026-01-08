// Import test data
import { cardApplicationData } from '../test-data/card-application-data';

export async function fillCardAppPage3(page) {
  
//*******************Unique inputs*********************/ 
  
  // Generate unique numeric suffix
  const uniqueNumber = Date.now().toString().slice(-8);

  // Application Reference ID
  await page.locator('#mat-input-160').fill(uniqueNumber);

  // Reference ID (slightly different)
  await page.locator('#mat-input-162').fill((Number(uniqueNumber) + 1).toString());

  
//*******************Unique inputs*********************/ 
  

  
  // //Product selection
  // await page.locator('#mat-select-value-61').click();
  // await page.getByRole('option', { name: 'NewProduct' }).click();
  // //Scheme selection
  // await page.locator('#mat-select-value-62').click();
  // await page.getByRole('option', { name: 'MASTERCARD' }).click();


    await page.locator('#mat-select-value-61').click(); // open Product dropdown
    await page.getByRole('option', {
    name: cardApplicationData.productAndScheme.productName, // read from test data
  }).click(); // select product

  await page.locator('#mat-select-value-62').click(); // open Scheme dropdown
  await page.getByRole('option', {
    name: cardApplicationData.productAndScheme.schemeName, // read from test data
  }).click(); // select scheme

  //Filling embossing name
  await page.getByRole('textbox', { name: 'Enter Embossing Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Embossing Name' }).fill('EMBOSS ');
  //Filling annual income
  await page.locator('#mat-radio-19-input').check();
  await page.locator('#mat-radio-21-input').check();
  await page.locator('#mat-select-value-63').click();
  //Branch selection
  await page.getByRole('option', { name: 'Dhanmondi Branch' }).click();
  await page.locator('#mat-input-160').click();
  
  //Date selection
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2024' }).click();
  await page.getByRole('button', { name: 'May' }).click();
  await page.getByRole('button', { name: 'May 2,' }).click();
  
    //Filling role
  await page.getByRole('textbox', { name: 'Enter Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role' }).fill('demo role');
  //Proceeding to next step
  await page.getByRole('button', { name: 'Next Step' }).click();

}