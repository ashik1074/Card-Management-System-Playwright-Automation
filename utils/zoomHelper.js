// Applies zoom to the page (used for CMS UI alignment)
export async function applyZoom(page, zoomPercent = 70) {
  await page.evaluate((zoom) => {
    document.body.style.zoom = `${zoom}%`;
  }, zoomPercent);
}
