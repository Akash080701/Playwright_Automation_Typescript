import { test, expect } from '@playwright/test';

test.describe('CredCorp dashboard', () => {
  test('login with credentials and click a dashboard item', async ({ page }) => {
    const emailInput = page.locator('input[placeholder="Enter your registered email address."]');
    const passwordInput = page.locator('#first-password-input');
    const loginButton = page.locator('button:has-text("Login")');
    const caseManagementLink = page.getByRole('link', { name: /Case Management/i });

    await page.goto('https://dev.credentiai.co.in/credcorp/#/authentication/login');

    await expect(emailInput).toBeVisible();
    await emailInput.fill('akash.manda+1008@credentiai.com');

    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('Test@234');

    await loginButton.click();

    await expect(page).toHaveURL(/#\/client\/dashboard/);
    await expect(caseManagementLink).toBeVisible();

    await caseManagementLink.click();

    await expect(page).toHaveURL(/#\/client\/case-management/);
    await expect(page).toHaveTitle(/Manage Cases/i);
  });
});
