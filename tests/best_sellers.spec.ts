import { test, expect } from '@playwright/test';
import { MainProductPage } from '../pages/main_product_page';
import { TestData } from '../utils/test_data';

test.describe('Related Products Tests', () => {

  test.beforeEach(async ({ page }) => {

    const productPage = new MainProductPage(page);

    await productPage.goto(TestData.PRODUCT_URL);

  });


  test('Verify maximum 6 products are displayed', async ({ page }) => {

    const productPage = new MainProductPage(page);

    const relatedProducts =
      await productPage.getRelatedProducts();

    expect(relatedProducts.length)
      .toBeLessThanOrEqual(TestData.MAX_RELATED_PRODUCTS);

  });


  
});