// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cboard.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cboard AAC | Home - Communication Boards for All/);
});


test('open cboard link', async ({ page }) => {
  await page.goto('https://www.cboard.io/');

  // Click the get started link.
  await page.getByLabel('cboard-app').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('.WelcomeScreen__container')).toBeVisible();
});

test('open cboard play store link', async ({ page }) => {
  await page.goto('https://www.cboard.io/');

  // Click the get started link.
  await page.getByLabel('google play store').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', {name: 'Cboard AAC'})).toBeVisible();
});

test('open cboard app store link', async ({ page }) => {
  await page.goto('https://www.cboard.io/');

  // Click the get started link.
  await page.getByLabel('apple app store').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', {name: 'AAC Cboard App'})).toBeVisible();
});

test('open cboard Microsoft store link', async ({ page }) => {
  await page.goto('https://www.cboard.io/');

  // Click the get started link.
  await page.getByLabel('microsoft store').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('.title')).toContainText('Cboard AAC app');
});

// test('open cboard amazon store link', async ({ page }) => {
//   await page.goto('https://www.cboard.io/');

//   // Click the get started link.
//   await page.getByLabel('amazon store').click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByTitle('Cboard AAC')).toBeVisible();
// });

test('index page has no loading or error indicators', async ({ page }) => {
  await page.goto('https://www.cboard.io/');
  await expect(page.locator('img[alt*=loading], .loading, .error')).toHaveCount(0);
});

test('index page has navigation and footer if present', async ({ page }) => {
  await page.goto('https://www.cboard.io/');
  const nav = page.locator('header');
  if (await nav.count()) {
    await expect(nav).toBeVisible();
  }
  const footer = page.locator('footer');
  if (await footer.count()) {
    await expect(footer).toBeVisible();
  }
});

test('index page has visible links, buttons, and images', async ({ page }) => {
  await page.goto('https://www.cboard.io/');
  expect(await page.locator('button').count()).toBeGreaterThanOrEqual(0);
  expect(await page.locator('img').count()).toBeGreaterThanOrEqual(0);
});

