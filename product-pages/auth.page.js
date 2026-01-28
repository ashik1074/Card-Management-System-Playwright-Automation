// product-pages/auth.page.js
import { environments, runConfig } from '../test-data/environments.data.js';

export async function login(page) {
  const envKey = runConfig.activeEnvKey;
  const env = environments[envKey];

  if (!env) {
    throw new Error(
      `❌ Unknown environment "${envKey}". Available: ${Object.keys(environments).join(', ')}`
    );
  }

  // Navigate directly to a protected page
  await page.goto(`${env.baseUrl}/card-product/products/list`, {
    waitUntil: 'domcontentloaded',
  });

  // Login form
  await page.getByRole('textbox', { name: 'Enter Email' }).fill(env.email);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(env.password);

  const rememberMe = page.getByRole('checkbox', { name: 'Remember Me' });
  if (await rememberMe.count()) {
    await rememberMe.check();
  }

  await page.getByRole('button', { name: 'Log In' }).click();
}
