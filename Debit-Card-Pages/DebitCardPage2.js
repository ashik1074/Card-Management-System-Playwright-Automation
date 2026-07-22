import { applyZoom } from '../utils/zoomHelper';
import { cardApplicationData } from '../test-data/card-application-data';
import { clearOverlays, waitForUiStable } from '../utils/uiHelper'; 
import {
  generateRandomFatherName,
  generateRandomMotherName
} from '../test-data/randomize.utils';

import { getRandomFullName, generateRandomNumber } from '../test-data/randomize.utils';

export class DebitCardPage2 {
  constructor(page) {
    this.page = page;
  }

  async fillPage2() {
    await this.page.locator('div').filter({ hasText: /^Select ID Type$/ }).nth(5).click();
    await this.page.getByRole('option', { name: 'Passport' }).click();

    await this.page.getByRole('textbox', { name: 'Enter ID Number' }).fill(generateRandomNumber(10));
    await this.page.getByRole('textbox', { name: 'Enter Address Line 1' }).fill('Dhaka');

    await this.page.locator('div').filter({ hasText: /^Select Country$/ }).nth(5).click();
    await this.page.getByRole('option', { name: 'Bangladesh' }).click();

    await this.page.locator('div').filter({ hasText: /^Select City$/ }).nth(5).click();
    await this.page.getByRole('option', { name: 'Dhaka' }).click();

    await this.page.getByRole('textbox', { name: 'Enter Thana' }).fill('Dhaka');
    await this.page.getByRole('textbox', { name: 'Enter Zip/Postal Code' }).fill(generateRandomNumber(6));

    await this.page.getByRole('button', { name: 'Next Step' }).click();
  }
}