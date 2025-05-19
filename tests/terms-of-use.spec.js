// @ts-check
import { test, expect } from '@playwright/test';

test('terms of use page loads and displays terms', async ({ page }) => {
  await page.goto('https://www.cboard.io/terms-of-use');
  await expect(page).toHaveTitle(/Terms/i);
  await expect(page.locator('h1, h2')).toContainText(['Terms of Service']);
});

test('terms of use page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/terms-of-use');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('terms of use page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/terms-of-use');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});