import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ultimateqa.com/');
  await page.getByRole('link', { name: 'About 3' }).hover();
  await page.locator('#menu-home-page-menu').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#et_pb_contact_first_0').click();
  await page.locator('#et_pb_contact_first_0').fill('Sudhan');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('S');
  await page.locator('#et_pb_contact_email_0').click();
  await page.locator('#et_pb_contact_email_0').fill('test@gmail.com');
  await page.locator('#et_pb_contact_email_0').press('Tab');
  await page.getByPlaceholder('Message').fill('test message');
  await page.getByRole('button', { name: '5 Send Message 9' }).click();
  await page.getByText('Thanks for contacting us').click();
  await expect(page.getByText('Thanks for contacting us', { exact: true })).toBeVisible();
});