import { Page, Locator } from '@playwright/test';

export class MainProductPage {

  readonly page: Page;

  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly relatedProducts: Locator;

  constructor(page: Page) {

    this.page = page;

    // Main product title
    this.productTitle = page.locator('[data-testid="x-item-title"] span');

    // Main product price
    this.productPrice = page.locator('.x-price-primary .ux-textspans').first();

    // Related products container
    this.relatedProducts = page.locator('#placement101875 .waYK');

  }

  async goto(url: string) {

    await this.page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await this.page.waitForSelector('div.waYK', {
      timeout: 25000
  });

  }

  async getMainProductPrice(): Promise<number> {

    const priceText = await this.productPrice.textContent();

    return parseFloat(
      priceText?.replace(/[^\d.]/g, '') || '0'
    );

  }

  async getRelatedProducts() {

    const products: { title: string, price: number }[] = [];

    const count = await this.relatedProducts.count();

    for (let i = 0; i < count; i++) {

      const product = this.relatedProducts.nth(i);

      const title =
        await product.locator('h3').textContent() || '';

      const priceText =
        await product.locator('.iALQ span').textContent() || '';

      const price = parseFloat(
        priceText.replace(/[^\d.]/g, '') || '0'
      );

      products.push({
        title: title.trim(),
        price: price
      });

    }

    return products;

  }

}