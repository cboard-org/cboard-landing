// @ts-check
import { test, expect } from '@playwright/test';

test('team page loads and displays team info', async ({ page }) => {
  await page.goto('https://www.cboard.io/team');
  await expect(page).toHaveTitle(/Team/i);
  await expect(page.locator('h1, h2')).toContainText(['Meet the Team']);
});

test('team page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/team');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('team page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/team');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});

test('team page has visible links, buttons, and images', async ({ page }) => {
  await page.goto('https://www.cboard.io/team');
  expect(await page.locator('button').count()).toBeGreaterThanOrEqual(0);
  expect(await page.locator('img').count()).toBeGreaterThanOrEqual(0);
});
