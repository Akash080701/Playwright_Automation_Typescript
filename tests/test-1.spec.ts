import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.credentiai.co.in/credcorp/#/authentication/login');
  await page.getByRole('textbox', { name: 'Enter your registered email' }).click();
  await page.getByRole('textbox', { name: 'Enter your registered email' }).fill('akash.manda+1008@credentiai.com');
  await page.getByRole('textbox', { name: 'Enter your registered email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).not.toHaveURL(/authentication\/login/);
});