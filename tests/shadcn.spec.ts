import { test, expect } from '@playwright/test';

test('shadcn Button increments counter (re-query)', async ({ page }) => {
    await page.goto('/shadcn');
  
    const btn0 = page.getByRole('button', { name: /Clicked 0 times/ });
    await expect(btn0).toBeVisible();
    await btn0.click();
  
    const btn1 = page.getByRole('button', { name: /Clicked 1 time/ });
    await expect(btn1).toBeVisible();
    await expect(btn1).toHaveText('Clicked 1 time');
  });
