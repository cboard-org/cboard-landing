// @ts-check
import { test, expect } from '@playwright/test';

test('history page loads and displays content', async ({ page }) => {
  await page.goto('https://www.cboard.io/history');
  await expect(page).toHaveTitle(/History/i);
  await expect(page.locator('h1, h2')).toContainText(['History']);
});

test('history page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/history');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('history page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/history');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});