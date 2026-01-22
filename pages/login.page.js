// policy-pages/auth.page.js
import { environments, runConfig } from '../test-data/environments.data.js';

export async function login(page) {
  const envKey = runConfig.activeEnvKey; // ✅ reads which ASP to use
  const env = environments[envKey];

  if (!env) {
    throw new Error(
      `❌ Unknown activeEnvKey "${envKey}". Valid options: ${Object.keys(environments).join(', ')}`
    );
  }

  const targetUrl = `${env.baseUrl}/card-apps/app/list`; // ✅ app URL (will redirect to login if not logged in)

  await page.goto(targetUrl, { waitUntil: 'domcontentloaded' }); // open page

  // ✅ Fill login form
  await page.getByRole('textbox', { name: 'Enter Email' }).fill(env.email);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(env.password);

  await page.getByRole('button', { name: 'Log In' }).click(); // login

  // Optional: you can wait for something post-login if needed
  // await page.waitForLoadState('networkidle');
}
