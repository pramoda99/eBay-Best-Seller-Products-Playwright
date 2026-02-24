import { Page, Locator } from '@playwright/test';

export class MainProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly relatedProducts: Locator;
  readonly relatedProductTitle: Locator;
  readonly relatedProductPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('[data-testid="x-item-title"] span');          
    this.productPrice = page.getByTestId('x-price-primary').locator('span').first();
    this.relatedProducts = page.locator('#placement101875');          
    this.relatedProductTitle = page.locator('.waYK h3');
    this.relatedProductPrice = page.locator('.waYK .iALQ span');
  }

  async goto(url: string) {
    await this.page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' });
  }

  async getMainProductTitle() {
    return (await this.productTitle.textContent())?.trim();
  }

  async getRelatedProducts() {
    const count = await this.relatedProducts.count();
    const products = [];
    for (let i = 0; i < count && i < 6; i++) { 
      const product = this.relatedProducts.nth(i);
      const title = await product.locator('.waYK h3').first().textContent();
      const priceText = (await product.locator('.waYK .iALQ span').first().textContent())?.trim();
      const price = parseFloat(priceText?.replace(/[^\d.]/g, '') || '0');
      products.push({ title, price });
    }
    return products;
  }
}