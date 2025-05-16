import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/csr');
});

test('CSR page fetches and renders items after hydration', async ({ page }) => {
    await page.waitForSelector('ul > li');
    const listItems = page.locator('ul > li');
    await expect(listItems).toHaveCount(2);
    await expect(listItems.first()).toContainText('First Item');
});
