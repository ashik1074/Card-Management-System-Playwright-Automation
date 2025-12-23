export async function fillCardAppPage1(page) {
  await page.getByText('Card Application', { exact: true }).click();
  await page.getByRole('link', { name: 'Application List' }).click();
  await page.getByRole('link', { name: ' Create Card Application' }).click();

  await page.locator('#mat-select-5').click();
  await page.getByRole('option', { name: 'Ms' }).click();
  
  //await page.getByRole('textbox', { name: 'Enter Full Name' }).fill('Demo'); 
  
  /***************** Random Client name will be generated from here**************/  
    function getRandomFullName() {
    const firstNames = [
      'Ashik', 'Rahim', 'Karim', 'Hasan', 'Mahmud', 'Rafi', 'Sabbir', 'Fahim',
      'Nayeem', 'Tanvir', 'Imran', 'Arif', 'Sakib', 'Shakil', 'Arafat',
      'Amina', 'Nusrat', 'Nabila', 'Sadia', 'Farzana', 'Jannat', 'Mim',
      'Nadia', 'Sara', 'Tania', 'Ritu', 'Anika', 'Mehjabin',
      'John', 'Michael', 'David', 'Alex', 'Daniel', 'James', 'Robert',
      'Emily', 'Sophia', 'Olivia', 'Emma', 'Isabella', 'Mia'
    ];

    const lastNames = [
      'Rahman', 'Islam', 'Khan', 'Ahmed', 'Hossain', 'Chowdhury', 'Mahmud',
      'Miah', 'Sarker', 'Uddin', 'Sheikh', 'Alam', 'Bhuiyan',
      'Smith', 'Johnson', 'Brown', 'Williams', 'Taylor', 'Anderson',
      'Walker', 'Thompson', 'Harris'
    ];

    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${first} ${last}`;
  }

  await page
    .getByRole('textbox', { name: 'Enter Full Name' })
    .fill(getRandomFullName());

  /***************** Random Client name generated**************/
  
  await page.getByRole('textbox', { name: "Enter Father's Name" }).fill('Test');
  await page.getByRole('textbox', { name: "Enter Mother's Name" }).fill('Testing');

  await page.getByRole('textbox', { name: 'Enter Occupation' }).fill('Intern');
  await page.getByRole('textbox', { name: 'Enter Personal Contact Number' }).fill('01789833786');

  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: '2002' }).click();
  await page.getByRole('button', { name: 'January' }).click();
  await page.getByRole('button', { name: 'January 1,' }).click();

  await page.locator('#mat-select-value-6').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  
  await page.getByRole('textbox', { name: 'Select Nationality' }).click();
  await page.getByRole('textbox', { name: 'Select Nationality' }).fill('demo');
  
  await page.locator('#mat-select-value-7').click();
  await page.getByText('Single').click();
  
  await page.locator('div').filter({ hasText: /^Select Religion$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Islam' }).click();
  
  await page.getByRole('textbox', { name: 'Enter Emergency Contact Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Emergency Contact Number' }).fill('234242342');
  
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('aa@gg.com');

  await page.getByRole('checkbox', { name: 'Same as Email' }).check();
  await page.getByRole('button', { name: 'Next Step' }).click();


}
