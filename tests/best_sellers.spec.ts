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


test('Verify related products are within acceptable price range (50% to 200%)', async ({ page }) => {

    const productPage = new MainProductPage(page);

    const mainPrice =
      await productPage.getMainProductPrice();

      console.log("Main Product Price:", mainPrice);

    const relatedProducts =
      await productPage.getRelatedProducts();

    const minPrice =
      mainPrice * TestData.PRICE_RANGE_MIN_FACTOR;

    const maxPrice =
      mainPrice * TestData.PRICE_RANGE_MAX_FACTOR;

      console.log("Expected Price Range:", minPrice, "-", maxPrice);

    for (const product of relatedProducts) {

      expect(product.price)
        .toBeGreaterThanOrEqual(minPrice);

      expect(product.price)
        .toBeLessThanOrEqual(maxPrice);

    }

  });

    test('Verify less than or equal to 6 best sellers available', async ({ page }) => {

    const productPage = new MainProductPage(page);

    const relatedProducts =
      await productPage.getRelatedProducts();

    expect(relatedProducts.length)
      .toBeLessThanOrEqual(6);

  });

    test('Verify product title is displayed', async ({ page }) => {

    const productPage = new MainProductPage(page);

    const relatedProducts =
      await productPage.getRelatedProducts();

    for (const product of relatedProducts) {

      expect(product.title.length)
        .toBeGreaterThan(0);

    }

  });

  test('Verify product price is displayed', async ({ page }) => {

    const productPage = new MainProductPage(page);

    const relatedProducts =
      await productPage.getRelatedProducts();

    for (const product of relatedProducts) {

      expect(product.price)
        .toBeGreaterThan(0);

    }

  });

  
});