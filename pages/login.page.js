export async function login(page) {

  await page.goto('http://asp-portal-qa25.konasl.net:10443/card-apps/app/list');

  await page.getByRole('textbox', { name: 'Enter Email' })
    .fill('maker25@yopmail.com');

  await page.getByRole('textbox', { name: 'Enter Password' })
    .fill('Abc@1234');

  await page.getByRole('button', { name: 'Log In' }).click();
}
