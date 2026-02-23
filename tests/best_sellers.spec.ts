import { test, expect } from '@playwright/test';

test('Open wallet product page', async ({ page }) => {
  await page.goto('https://www.ebay.com/itm/195060516753');
  await expect(page).toHaveTitle(/pen bag Notepad case cover pouch Note notebook holder cow Leather brown H99/);
});