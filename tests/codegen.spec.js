import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page.locator('path').first()).toBeVisible();
  await expect(page.locator('body')).toContainText('Explore the things you love.');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('example@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Email address or mobile number' })).toHaveValue('example@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password@123');
  await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#login_form')).toContainText('The login information you entered is incorrect. Find your account and log in.');
  await expect(page.locator('#login_form')).toMatchAriaSnapshot(`
    - img
    - text: The login information you entered is incorrect.
    - link "Find your account and log in.":
      - /url: https://facebook.com/login/identify/
    - textbox "Email address or mobile number": example@gmail.com
    - text: Email address or mobile number
    - textbox "Password": /password@\\d+/
    - text: Password
    - button "Show password"
    - button "Log in"
    - link "Forgotten password?":
      - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkzNTg2ODkxfQ%3D%3D&ars=facebook_login
    - link "Create new account":
      - /url: /reg/?entry_point=login
    - img "Meta logo"
    `);
});