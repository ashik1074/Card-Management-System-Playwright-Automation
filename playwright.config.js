// @ts-check
import { defineConfig } from '@playwright/test';

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

    // ✅ REAL MAXIMIZE
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
