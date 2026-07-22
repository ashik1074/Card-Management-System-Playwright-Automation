import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://ebl-bd.konasl.net:10443/auth/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('ebl-bd@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Konasl@1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('span').filter({ hasText: 'Card Applications' }).click();
  await page.getByRole('link', { name: 'Debit Cards' }).click();
  await page.getByRole('link', { name: 'New Application' }).click();

  await page.locator('div').filter({ hasText: /^Select Title$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Mr', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Full Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Full Name' }).fill('Ashikur Rahman');
  await page.getByRole('textbox', { name: 'Enter Father\'s Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Father\'s Name' }).fill('Shahjahan');
  await page.getByRole('textbox', { name: 'Enter Mother\'s Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Mother\'s Name' }).fill('Nasrin Akter');
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2003' }).click();
  await page.getByRole('button', { name: 'February' }).click();
  await page.getByRole('button', { name: 'February 4,' }).click();
  await page.locator('div').filter({ hasText: /^Select Gender$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Enter Nationality$/ }).nth(2).click();
  await page.getByRole('combobox', { name: 'Enter Nationality' }).press('Enter');
  await page.locator('div').filter({ hasText: /^Select Marital Status$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('div').filter({ hasText: /^Select Religion$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Islam' }).click();
  await page.getByRole('textbox', { name: 'Enter Occupation' }).click();
  await page.getByRole('textbox', { name: 'Enter Occupation' }).fill('Doctor');
  await page.getByRole('textbox', { name: 'Personal Contact Number' }).click();
  await page.getByRole('textbox', { name: 'Personal Contact Number' }).fill('01789833786');
  await page.getByRole('textbox', { name: 'Personal Contact Number' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Personal Contact Number' }).press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Emergency Contact Number' }).click();
  await page.getByRole('textbox', { name: 'Emergency Contact Number' }).fill('01789833786');
  await page.getByRole('textbox', { name: 'Enter Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Email Address' }).fill('username.ksl@yopmail.com');
  await page.getByRole('button', { name: 'Next Step' }).click();
  
  await page.locator('div').filter({ hasText: /^Select ID Type$/ }).nth(5).click();
  await page.getByRole('option', { name: 'Passport' }).click();
  await page.getByRole('textbox', { name: 'Enter ID Number' }).click();
  await page.getByRole('textbox', { name: 'Enter ID Number' }).fill('0934534905');
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('Dhaka');
  await page.locator('div').filter({ hasText: /^Select Country$/ }).nth(5).click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(5).click();
  //await page.locator('div').filter({ hasText: /^Select City$/ }).nth(5).click();
  await page.getByRole('option', { name: 'Dhaka' }).click();
  await page.getByRole('textbox', { name: 'Enter Thana' }).click();
  await page.getByRole('textbox', { name: 'Enter Thana' }).fill('Dhaka');
  await page.getByRole('textbox', { name: 'Enter Zip/Postal Code' }).click();
  await page.getByRole('textbox', { name: 'Enter Zip/Postal Code' }).fill('1245');
  await page.getByRole('button', { name: 'Next Step' }).click();
  await page.locator('#cdk-stepper-0-content-2 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > .mb-2.row > formly-field:nth-child(2) > .row > formly-field > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
  await page.getByRole('option', { name: 'Super Saver Debit' }).click();
  await page.getByLabel('Product & Bank Information').getByText('Select Scheme').click();
  await page.getByRole('option', { name: 'Union Pay' }).click();
  await page.getByRole('checkbox', { name: 'Same as Full Name' }).check();
  await page.getByLabel('Product & Bank Information').getByText('Select Issuance Priority').click();
  await page.getByRole('option', { name: 'Regular' }).click();
  await page.getByLabel('Product & Bank Information').getByText('Select Delivery Method').click();
  await page.getByRole('option', { name: 'Communication Address' }).click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByLabel('Product & Bank Information').getByText('Select Branch').click();
  await page.getByRole('option', { name: 'Banani Branch' }).click();
  await page.locator('#mat-input-120').click();
  await page.locator('#mat-input-120').fill('93284729842');
  await page.getByRole('textbox', { name: 'Select Application Date' }).click();
  await page.getByRole('button', { name: 'June 25,' }).click();
  await page.locator('#mat-input-122').click();
  await page.locator('#mat-input-122').fill('4835743985');
  await page.getByRole('textbox', { name: 'Enter Role' }).click();
  await page.getByRole('textbox', { name: 'Enter Role' }).fill('Executive');
  await page.getByRole('textbox', { name: 'Enter CBS Client ID' }).click();
  await page.getByRole('textbox', { name: 'Enter CBS Client ID' }).fill('874564387543');
  await page.getByRole('textbox', { name: 'Enter CBS Client ID' }).press('Tab');
  await page.getByLabel('Product & Bank Information').getByText('Select Account Type').click();
  await page.getByRole('option', { name: 'Savings Account' }).click();
  await page.getByRole('textbox', { name: 'Enter Account Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Account Number' }).fill('59437834957834534');
  await page.getByRole('button', { name: 'Next Step' }).click();
  
  
  
  await page.pause();

  });