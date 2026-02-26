# QA Automation Project: eBay Best Sellers Validation

## Project Overview

### Scenario 
Assume that as a shopper on eBay, you are going to buy a wallet. After searching for the main product, you will be able to see the main product. In the main product page, I would like to see a list of related products that are best sellers. Related products should be the same category as the main searched product. Those will be in the same price range. Up to six products will appear as best seller products.

The goal is to ensure that when a shopper views a wallet, the suggested products are relevant in terms of **Category**, **Quantity**, and **Price Range**.

---

## Manual Testing - Documentation
* [01-Requirement Clarifications Document](https://github.com/pramoda99/eBay-Best-Seller-Products-Playwright/blob/main/documentation/01-Requirement%20Clarifications_Pramoda%20Piyumali%20Gunasekara.xlsx) 
* [02-Test Strategy Document](https://github.com/pramoda99/eBay-Best-Seller-Products-Playwright/blob/main/documentation/02-Test%20Strategy_Pramoda%20Piyumali%20Gunasekara.pdf) 
* [03-Test Suite Document](https://github.com/pramoda99/eBay-Best-Seller-Products-Playwright/blob/main/documentation/03-Test%20Suite_Pramoda%20Piyumali%20Gunasekara.xlsx) 
* [04-Bugs Report Document](https://github.com/pramoda99/eBay-Best-Seller-Products-Playwright/blob/main/documentation/04-Bugs%20Report_Pramoda%20Piyumali%20Gunasekara.xlsx) 

---

## Tech Stack & Architecture
* **Tool:** Playwright with TypeScript
* **Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub 

### Why this architecture? 
As a QA Engineer, I implemented the **Page Object Model** to ensure the framework is maintainable. By separating the UI Locators (in `pages/`) from the Test Logic (in `tests/`).

---

### Project Structure

```
project-root
│
├── pages
│   └── main_product_page.ts
│
├── tests
│   └── best_sellers.spec.ts
│
├── utils
│   └── test_data.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Test Scenarios Covered
The following test cases were derived from the business requirements:

| TC ID | Scenario | 
| :--- | :--- | 
| **TC_01** | **Verify maximum 6 related products are displayed** | 
| **TC_02** | **Verify related products are within acceptable price range (50% to 200% of main product price)** | 
| **TC_03** | **Verify behavior when less than 6 related products available** | 
| **TC_04** | **Price ConsistencyVerify product title is displayed** |
| **TC_05** | **Verify product price is displayed** |
| **TC_06** | **Verify no duplicate products are displayed** |
---


## How to Run the Project

### 1. Prerequisites
* [Node.js](https://nodejs.org/) 
* Git

### 2. Installation
```bash
# Clone the repository
git clone <https://github.com/pramoda99/eBay-Best-Seller-Products-Playwright.git>

# Navigate to the folder
cd eBay Best Seller Products

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests:
npx playwright test

# Run in headed mode:
npx playwright test --headed

# After execution, results can be viewed in:
playwright-report/index.html

# Open report:
npx playwright show-report

```

---
## Author

Pramoda Piyumali Gunasekara

Software Quality Assurance Engineer

