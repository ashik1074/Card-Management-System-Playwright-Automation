import { fullName } from '../pages/cardApp.page1';

export async function submitApplication(page) {
  //await page.getByRole('button', { name: 'Submit Application' }).click();
  //console.log('Submitting application for:', fullName); // Log the name being submitted
  await page.pause();
}
