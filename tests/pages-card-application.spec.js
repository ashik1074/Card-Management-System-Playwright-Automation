import { test } from '@playwright/test';

import { login } from '../pages/login.page';
import { fillCardAppPage1 } from '../pages/cardApp.page1';
import { fillCardAppPage2 } from '../pages/cardApp.page2';
import { fillCardAppPage3 } from '../pages/cardApp.page3';
import { fillCardAppPage4 } from '../pages/cardApp.page4';
import { submitApplication } from '../pages/submit.page';
import { getRandomValues } from 'crypto';


test('Card Application End-to-End', async ({ page }) => {

  const pauseHere = async () => {
    await page.pause();
  };

  await login(page); // ✅ automatically uses activeEnvKey from test data
  await fillCardAppPage1(page); //Applicant Details of Card Application
  await fillCardAppPage2(page); //Identification & Address of Card Application
  await fillCardAppPage3(page); //Product & Bank Information of Card Application
  await fillCardAppPage4(page); //Nominee Information of Card Application
  await submitApplication(page); //Preview and Submit the Card Application


  //To Pause the test for debugging, place it after the function where needed.  
  //                     ↓
  //           await page.pause();  


});
