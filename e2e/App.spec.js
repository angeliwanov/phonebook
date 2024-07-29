const { test, describe, expect } = require('@playwright/test');

describe('App', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Phonebook')).toBeVisible();
    await expect(page.getByText('Add a number')).toBeVisible();
    await expect(page.getByText('Numbers')).toBeVisible();
  });
});
