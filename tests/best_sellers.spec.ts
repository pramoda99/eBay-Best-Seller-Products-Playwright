import { test, expect } from '@playwright/test';
import { MainProductPage } from '../pages/main_product_page';

test('Validate related products on wallet page', async ({ page }) => {
  const productPage = new MainProductPage(page);

  //Open main product page
  await productPage.goto('https://www.ebay.com/itm/195060516753?_skw=pen+bag+Notepad+case+cover+pouch+Note+notebook+holder+cow+Leather+brown+H99&itmmeta=01KJ5F6X4JBE930XB883YN07HF&hash=item2d6a834791:g:G4gAAOSwTdRig23M&itmprp=enc%3AAQALAAABMGfYFPkwiKCW4ZNSs2u11xDa5jHvI4iXUCKev1mpY62yfFl4Fyl2uFksI20Kz0YLrbdXLNOuaT%2BeZhMqw%2Bf1UwVCkp4F1ZgMOCVwTG0CsjUbXIsFqZAL63WhSP8kOoNAiM4IcRfjwvr4ViVq2QO0u%2F2%2BP4Zt3OFmLHMcdZM1RdFka8SvgPRk%2F8g%2BCJ1OU4xm8B8gI0UPw1K%2B%2FeNQM%2FTRHBB7Uz0f7kPijhjDFv6T5J79GU939T%2BobDrPLJh5KO5XMgCAfpzP8d2xNp8zfH7xW6LhbBBD9afuGeEmb6n6nTaD1Qg0sZDHfk4MFpR6tK0rwCPO0ZYS%2FXbNiLPPw0AmuZCEvWYIKD19%2FgXFQd49Xsf%2FocHlpztAZXFBTaaPwGR%2BDGcVYMVg14LMjNrfSWRXgt4%3D%7Ctkp%3ABk9SR7zSm6-RZw');
  //await page.pause();

  // Get product details
  const mainTitle = await productPage.getMainProductTitle();

  // Get related products
  const relatedProducts = await productPage.getRelatedProducts();

  // Test case 01 : Maximum 6 related products
  expect(relatedProducts.length).toBeLessThanOrEqual(6);

  // validate title 
  for (const item of relatedProducts) {
    expect(item.title).toBeTruthy();
  }
});