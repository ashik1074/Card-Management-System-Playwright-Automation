import { applyZoom } from '../utils/zoomHelper';
import { cardApplicationData } from '../test-data/card-application-data';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper'; 
import {
  generateRandomFatherName,
  generateRandomMotherName
} from '../test-data/randomize.utils';

import { getRandomFullName, generateRandomNumber } from '../test-data/randomize.utils';


export class DebitCardPage3 {
  constructor(page) {
    this.page = page;
  }



  async fillPage3() {
    // await this.page.locator('#cdk-stepper-0-content-2 > .step-content > .stepper-form > formly-form > formly-field > formly-group > formly-field:nth-child(2) > .mb-2.row > formly-field:nth-child(2) > .row > formly-field > formly-field-ksl-select > .d-grid > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').first().click();
    // await this.page.getByRole('option', { name: 'Super Saver Debit' }).click();

    // await this.page.getByLabel('Product & Bank Information').getByText('Select Scheme').click();
    // await this.page.getByRole('option', { name: 'Union Pay' }).click();


    const productOption = page.getByRole('option', {
      name: cardApplicationData.productAndScheme.productName,
      exact: true,
    });
    
      await expect(productOption).toBeVisible({ timeout: 10000 });
      await productOption.click();
    
      await page.waitForTimeout(1000);
      
      const schemeDropdown = page
      .getByLabel('Product & Bank Information')
      .getByText('Select Scheme', { exact: true });
    
      await expect(schemeDropdown).toBeVisible({ timeout: 10000 });
      await schemeDropdown.click();
    
      const schemeOption = page.getByRole('option', {
        name: cardApplicationData.productAndScheme.schemeName,
        exact: true,
      });
    
      await expect(schemeOption).toBeVisible({ timeout: 10000 });
      await schemeOption.click();
      

    await this.page.getByRole('checkbox', { name: 'Same as Full Name' }).check();

    await this.page.getByLabel('Product & Bank Information').getByText('Select Issuance Priority').click();
    await this.page.getByRole('option', { name: 'Regular' }).click();

    await this.page.getByLabel('Product & Bank Information').getByText('Select Delivery Method').click();
    await this.page.getByRole('option', { name: 'Communication Address' }).click();

    await this.page.getByRole('radio', { name: 'Yes' }).check();

    await this.page.getByLabel('Product & Bank Information').getByText('Select Branch').click();
    await this.page.getByRole('option', { name: 'Banani Branch' }).click();


    const applicationReferenceId = this.page
    .locator('input[placeholder="Enter Reference ID"]:visible')
    .nth(0);

    await applicationReferenceId.fill(generateRandomNumber(8));


    await this.page.getByRole('textbox', { name: 'Select Application Date' }).click();
    await this.page.getByRole('button', { name: 'June 25,' }).click();

    const referenceId = this.page
    .locator('input[placeholder="Enter Reference ID"]:visible')
    .nth(1);

    await referenceId.fill(generateRandomNumber(8));

    await this.page.getByRole('textbox', { name: 'Enter Role' }).fill('Executive');

    await this.page.getByLabel('Product & Bank Information').getByText('Select Account Type').click();
    await this.page.getByRole('option', { name: 'Savings Account' }).click();
    await this.page.getByRole('textbox', { name: 'Enter Account Number' }).fill(generateRandomNumber(12));

    await this.page.getByRole('button', { name: 'Next Step' }).click();
  }
}