// utils/uiHelper.js

// Wait until the page is stable enough for next actions
export async function waitForUiStable(page) {
  await page.waitForLoadState('domcontentloaded'); // DOM ready
  await page.waitForTimeout(300);                  // small buffer for Angular re-render
}

// Try to close any blocking overlays (ESC closes dialogs/dropdowns)
export async function clearOverlays(page) {
  await page.keyboard.press('Escape');             // close dropdown/dialog if open
  await page.waitForTimeout(200);                  // allow UI to remove backdrop
}
