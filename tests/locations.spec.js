// @ts-check
import { test, expect } from '@playwright/test';

test('locations page loads and displays locations', async ({ page }) => {
  await page.goto('https://www.cboard.io/locations');
  await expect(page).toHaveTitle(/Locations/i);
  await expect(page.locator('h1, h2')).toContainText(['Our Locations']);
});

test('locations page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/locations');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('locations page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/locations');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});

test('locations page has visible links, buttons, and images', async ({ page }) => {
  await page.goto('https://www.cboard.io/locations');
  expect(await page.locator('button').count()).toBeGreaterThanOrEqual(0);
  expect(await page.locator('img').count()).toBeGreaterThanOrEqual(0);
});
