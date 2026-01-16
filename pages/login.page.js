export async function login(page) {


  // await page.goto('http://cms-portal-01.konasl.net:10443/card-apps/app/list');

  // await page.getByRole('textbox', { name: 'Enter Email' })
  //   .fill('ashik1074@yopmail.com');

  // await page.getByRole('textbox', { name: 'Enter Password' })
  //   .fill('Ashik@123');

  // await page.getByRole('button', { name: 'Log In' }).click();


  // await page.goto('http://asp-portal-qa25.konasl.net:10443/card-apps/app/list');

  // await page.getByRole('textbox', { name: 'Enter Email' })
  //   .fill('checker25@yopmail.com');

  // await page.getByRole('textbox', { name: 'Enter Password' })
  //   .fill('Abc@1234');

  // await page.getByRole('button', { name: 'Log In' }).click();


  // await page.goto('http://banking-cms-123.konasl.net:10443/card-apps/app/list');

  // await page.getByRole('textbox', { name: 'Enter Email' })
  //   .fill('banking-cms-123@yopmail.com');

  // await page.getByRole('textbox', { name: 'Enter Password' })
  //   .fill('Abc@1234');

  // await page.getByRole('button', { name: 'Log In' }).click();


    await page.goto('http://next-gen-02.konasl.net:10443/card-apps/app/list');

  await page.getByRole('textbox', { name: 'Enter Email' })
    .fill('next-gen-admin@yopmail.com');

  await page.getByRole('textbox', { name: 'Enter Password' })
    .fill('Konasl@@1234');

  await page.getByRole('button', { name: 'Log In' }).click();



}


//Other 