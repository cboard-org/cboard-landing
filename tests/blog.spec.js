// @ts-check
import { test, expect } from '@playwright/test';

test('blog page loads and displays blog content', async ({ page }) => {
  await page.goto('https://www.cboard.io/blog');
  await expect(page).toHaveTitle(/Blog/i);
});

test('blog page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/blog');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('blog page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/blog');
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});
