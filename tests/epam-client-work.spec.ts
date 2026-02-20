import { test, expect } from '@playwright/test';

describe('EPAM Client Work navigation', () => {
  test('Navigate to EPAM and open Client Work from Services', async ({ page }) => {
    // Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Open header Services menu
    const services = page.getByRole('link', { name: /Services/i });
    await services.click();

    // Click 'Explore Our Client Work' link
    const explore = page.getByRole('link', { name: /Explore Our Client Work/i });
    await explore.click();

    // Verify 'Client Work' text is visible
    const clientWorkText = page.getByRole('heading', { name: /Client Work/i }).first();
    await expect(clientWorkText).toBeVisible();
  });
});
