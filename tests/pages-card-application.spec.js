import { test } from '@playwright/test';

import { login } from '../pages/login.page';
import { fillCardAppPage1 } from '../pages/cardApp.page1';
import { fillCardAppPage2 } from '../pages/cardApp.page2';
import { fillCardAppPage3 } from '../pages/cardApp.page3';
import { fillCardAppPage4 } from '../pages/cardApp.page4';
import { submitApplication } from '../pages/submit.page';


test('Card Application End-to-End', async ({ page }) => {

  const pauseHere = async () => {
    await page.pause();
  };

  //To Pause the test for debugging, place it where needed.  
  //await pauseHere();  

  await login(page); //Login to the CMS Portal
  await fillCardAppPage1(page); // Fill Applicant Details of Card Application
  await fillCardAppPage2(page); // Fill Identification & Address of Card Application
  await fillCardAppPage3(page); // Fill Product & Bank Information of Card Application
  await fillCardAppPage4(page); // Fill Nominee Information of Card Application
  await submitApplication(page); //Preview and Submit the Card Application

});
