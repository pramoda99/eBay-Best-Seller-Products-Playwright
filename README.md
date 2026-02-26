# QA Automation Project: eBay Best Sellers Validation

## Project Overview
This repository contains a Playwright test automation framework designed to validate the "Best Selling" related products logic on the eBay Product Display Page. 

The goal is to ensure that when a shopper views a wallet, the suggested products are relevant in terms of **Category**, **Quantity**, and **Price Range**.

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
* [Node.js](https://nodejs.org/) (v18 or higher)
* Git

### 2. Installation
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_LINK>

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

