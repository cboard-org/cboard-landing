// @ts-check
import { test, expect } from '@playwright/test';

test('privacy page loads and displays privacy policy', async ({ page }) => {
  await page.goto('https://www.cboard.io/privacy');
  await expect(page).toHaveTitle(/Privacy/i);
  await expect(page.locator('h1, h2')).toContainText(['Privacy Policy']);
});

test('privacy page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/privacy');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('privacy page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/privacy');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});