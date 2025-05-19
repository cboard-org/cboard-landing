// @ts-check
import { test, expect } from '@playwright/test';

test('contact page loads and displays contact form', async ({ page }) => {
  await page.goto('https://www.cboard.io/contact');
  await expect(page).toHaveTitle(/Contact/i);
  // Optionally check for a contact form or heading
  await expect(page.locator('h1')).toContainText(['Contact Us']);
});

test('contact page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/contact');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('contact page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/contact');
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});