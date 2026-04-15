import { applyZoom } from '../utils/zoomHelper';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper'; 
import {
  generateRandomFatherName,
  generateRandomMotherName
} from '../test-data/randomize.utils';

import { getRandomFullName, generateRandomNumber } from '../test-data/randomize.utils';

export async function fillCardAppPage1(page) {

  const fullName = getRandomFullName();
  const fatherName = generateRandomFatherName();
  const motherName = generateRandomMotherName();
  const randomContactNumber = generateRandomNumber(10);

  //await page.pause();
  // await page.locator('.fuse-vertical-navigation-item.menu-link.ng-tns-c1507090251-16').click();
  // await page.getByRole('link', { name: 'Application List' }).click();
  await page.locator('span').filter({ hasText: /^Card Application$/ }).click();
  await page.getByRole('link', { name: 'New Application' }).click();
  //await page.getByRole('link', { name: 'New Application' }).click();
  //await page.pause();
  // await page.locator('#mat-select-5').click();
  // await page.getByRole('option', { name: 'Ms' }).click();
  await page.locator('div').filter({ hasText: /^Select Title$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Mr', exact: true }).click();
  /***************** Random Client name will be generated from here**************/  
  

  await page
    .getByRole('textbox', { name: 'Enter Full Name' })
    .fill(fullName);

  /***************** Random Client name generated**************/
  
  await page.getByRole('textbox', { name: "Enter Father's Name" }).fill(fatherName); //'Enter Father's Name'
  await page.getByRole('textbox', { name: "Enter Mother's Name" }).fill(motherName); //'Enter Mother's Name'
  await page.getByRole('textbox', { name: 'Enter Occupation' }).fill('Intern'); //'Enter Occupation'
  
  //'Enter Personal Contact Number'
  await page
  .getByPlaceholder('Enter Number')
  .nth(0)              // choose the correct index
  .fill(randomContactNumber);


  //Date of Birth selection
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2003' }).click();
  await page.getByRole('button', { name: 'January' }).click();
  await page.getByRole('button', { name: 'January 6,' }).click();
  //await page.pause();

  await page.locator('div').filter({ hasText: /^Select Marital Status$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('div').filter({ hasText: /^Select Gender$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();

  await page.locator('div').filter({ hasText: /^Enter Nationality$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Bangladeshi' }).click();

  // await page.locator('div').filter({ hasText: /^Select Marital Status$/ }).nth(2).click();
  // await page.getByRole('option', { name: 'Single' }).click();
  
  await page.locator('div').filter({ hasText: /^Select Religion$/ }).nth(2).click(); //Religion
  await page.getByRole('option', { name: 'Islam' }).click(); //Selecting


  //Filling emergency Contact Number
    await page
  .getByPlaceholder('Enter Number')
  .nth(1)              // choose the correct index
  .fill('17236173');

  await page.getByPlaceholder('Enter Email').nth(0).fill('jayed_email@yopmail.com'); //Filling email

  await page.getByRole('button', { name: 'Next Step' }).click(); //Proceeding to next step

}
