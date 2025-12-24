// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 500000,

  expect: {
    timeout: 500000,
  },

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    actionTimeout: 500000,
    navigationTimeout: 500000,

    // ✅ SET SCREEN RESOLUTION HERE
    viewport: { width: 1366, height: 768 },

    // Optional but recommended
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 }, // ✅ explicit per browser
      },
    },
  ],
});
