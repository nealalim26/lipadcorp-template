import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Wait for the main content to be visible
    // await expect(page.locator('main')).toBeVisible();

    // Check if the page title is correct
    await expect(page).toHaveTitle(/LIPAD Corporation/);

    // Check if the page contains expected content
    // await expect(page.locator('text=Get started by editing')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('body')).toBeVisible();
    // await expect(page.locator('main')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();
    // await expect(page.locator('main')).toBeVisible();
  });
});
