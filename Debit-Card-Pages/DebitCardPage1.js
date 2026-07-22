
import { applyZoom } from '../utils/zoomHelper';
import { cardApplicationData } from '../test-data/card-application-data';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper'; 
import {
  generateRandomFatherName,
  generateRandomMotherName
} from '../test-data/randomize.utils';

import { getRandomFullName, generateRandomNumber } from '../test-data/randomize.utils';


export class DebitCardPage1 {
  constructor(page) {
    this.page = page;
  }

  async openNewDebitCardApplication() {
    await this.page.locator('span').filter({ hasText: 'Card Applications' }).click();
    await this.page.getByRole('link', { name: 'Debit Cards' }).click();
    await this.page.getByRole('link', { name: 'New Application' }).click();
  }

  async fillPage1() {
    await this.page.locator('div').filter({ hasText: /^Select Title$/ }).nth(2).click();
    await this.page.getByRole('option', { name: 'Mr', exact: true }).click();

    await this.page.getByRole('textbox', { name: 'Enter Full Name' }).fill(getRandomFullName());
    await this.page.getByRole('textbox', { name: "Enter Father's Name" }).fill(generateRandomFatherName());
    await this.page.getByRole('textbox', { name: "Enter Mother's Name" }).fill(generateRandomMotherName());

    await this.page.getByRole('button', { name: 'Open calendar' }).click();
    await this.page.getByRole('button', { name: 'Choose month and year' }).click();
    await this.page.getByRole('button', { name: '2003' }).click();
    await this.page.getByRole('button', { name: 'February' }).click();
    await this.page.getByRole('button', { name: 'February 4,' }).click();

    await this.page.locator('div').filter({ hasText: /^Select Gender$/ }).nth(2).click();
    await this.page.getByRole('option', { name: 'Male', exact: true }).click();



    await this.page.locator('div').filter({ hasText: /^Enter Nationality$/ }).nth(2).click()    
    await this.page.getByRole('option', { name: 'Bangladeshi' }).click();


    await page.getByRole('textbox', { name: 'Enter CIF ID' }).click();
    await page.getByRole('textbox', { name: 'Enter CIF ID' }).fill('093450938');

//    await this.page.getByRole('combobox', { name: 'Enter Nationality' }).press('Enter');

    await this.page.locator('div').filter({ hasText: /^Select Marital Status$/ }).nth(2).click();
    await this.page.getByRole('option', { name: 'Single' }).click();

    await this.page.locator('div').filter({ hasText: /^Select Religion$/ }).nth(2).click();
    await this.page.getByRole('option', { name: 'Islam' }).click();

    await this.page.getByRole('textbox', { name: 'Enter Occupation' }).fill('Doctor');
    await this.page.getByRole('textbox', { name: 'Personal Contact Number' }).fill('01789833786');
    await this.page.getByRole('textbox', { name: 'Emergency Contact Number' }).fill('01789833786');
    await this.page.getByRole('textbox', { name: 'Enter Email Address' }).fill('username.ksl@yopmail.com');

    //await this.page.pause();
    await this.page.getByRole('button', { name: 'Next Step' }).click();
  }
}