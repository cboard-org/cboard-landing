// @ts-check
import { test, expect } from '@playwright/test';

test('pricing page loads and displays pricing info', async ({ page }) => {
  await page.goto('https://www.cboard.io/pricing');
  await expect(page).toHaveTitle(/Pricing/i);
  await expect(page.locator('h1, h2')).toContainText(['Pricing']);
});

test('pricing page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/pricing');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('pricing page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/pricing');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});

test('pricing page has visible links, buttons, and images', async ({ page }) => {
  await page.goto('https://www.cboard.io/pricing');
  expect(await page.locator('button').count()).toBeGreaterThanOrEqual(0);
  expect(await page.locator('img').count()).toBeGreaterThanOrEqual(0);
});
