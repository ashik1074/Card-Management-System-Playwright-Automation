import { applyZoom } from '../utils/zoomHelper';

// Handles CMS login functionality
export async function login(page) {
    await applyZoom(page); // Apply 70% zoom

  await page.goto('http://cms-portal-01.konasl.net:10443/card-apps/app/list');

  await page.getByRole('textbox', { name: 'Enter Email' })
    .fill('ashik1074@yopmail.com');

  await page.getByRole('textbox', { name: 'Enter Password' })
    .fill('Ashik@123');

  await page.getByRole('button', { name: 'Log In' }).click();
}
