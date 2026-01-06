import { applyZoom } from '../utils/zoomHelper';

// Handles CMS login functionality
export async function login(page) {
    await applyZoom(page); // Apply 70% zoom

  await page.goto('http://banking-cms-123.konasl.net:10443/auth/login');

  await page.getByRole('textbox', { name: 'Enter Email' })
    .fill('banking-cms-123@yopmail.com');

  await page.getByRole('textbox', { name: 'Enter Password' })
    .fill('Konasl@@12');

  await page.getByRole('button', { name: 'Log In' }).click();
}
