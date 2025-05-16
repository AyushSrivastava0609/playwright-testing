import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/ssr');
});

test('SSR page shows items from backend', async ({ page }) => {
  const items = page.locator('ul > li');
  await expect(items).toHaveCount(2);
  await expect(items.first()).toHaveText('First Item');
});
