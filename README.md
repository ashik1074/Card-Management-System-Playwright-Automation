
---

### ✅ How to download/use it

1. Copy everything inside the block below
2. Create a file named **`README.md`** in your project root
3. Paste → Save → Commit → Push

---

```md
# Playwright Automation – Card Application (CMS Portal)

This repository contains **end-to-end UI automation tests** for the **Card Application flow** of the CMS Portal, implemented using **Playwright (JavaScript)** and following the **Page Object Model (POM)** design pattern.

The project is designed so that any team member can **clone the repository and run the tests with minimal setup**.

---

## 🛠 Tech Stack

- **Playwright** – UI automation framework
- **JavaScript (ES Modules)** – Test implementation
- **Chromium** – Browser used for execution
- **Node.js** – Runtime environment

---

## 📁 Project Structure

```

project-root/
│
├── tests/
│   └── pages-card-application.spec.js   # Main end-to-end test
│
├── pages/
│   ├── login.page.js                     # Login related actions
│   ├── cardApp.page1.js                 # Applicant information
│   ├── cardApp.page2.js                 # Identification & address
│   ├── cardApp.page3.js                 # Product & bank info
│   ├── cardApp.page4.js                 # Nominee information
│   └── submit.page.js                   # Submit application action
│
├── utils/
│   ├── nameGenerator.js                 # Random alphabet-only name generator
│   └── debug.js                         # Debug / pause helper
│
├── playwright.config.js                 # Playwright configuration
├── package.json
├── package-lock.json
└── README.md

````

---

## ✅ Prerequisites

Before running the tests, ensure the following is installed:

- **Node.js (LTS recommended)**  
  Download: https://nodejs.org

---

## 🚀 Setup Instructions (First Time Only)

### 1️⃣ Clone the repository
```bash
git clone <repository-url>
cd <project-folder>
````

### 2️⃣ Install dependencies

```bash
npm install
```

> ℹ️ During installation, **Chromium browser will be downloaded automatically** using Playwright’s `postinstall` script.
> No manual browser installation is required.

---

## ▶️ Running Tests

### Run tests in headless mode

```bash
npm test
```

### Run tests in headed mode (recommended for debugging)

```bash
npm run test:headed
```

---

## 🖥 Browser Configuration

* Only **Chromium** browser is used
* Browser window opens in **maximized mode**
* Firefox and WebKit are intentionally excluded

This configuration is handled in `playwright.config.js`.

---

## 🧩 Page Object Model (POM)

Each page or step of the Card Application flow is separated into individual files under the `pages/` directory.

### Benefits:

* Clean and maintainable code
* Reusable page actions
* Easy debugging
* Ability to run partial flows (e.g., Page 1 → Page 2 only)

---

## 🎲 Test Data Handling

### Random Name Generation

* Full names are generated dynamically using `utils/nameGenerator.js`
* Ensures:

  * Alphabet-only values
  * High uniqueness
  * Suitable for frequent executions

Example generated values:

```
Ashik RahmanXQd
Sara KhanAbZ
John SmithPRe
```

---

## 🛑 Debugging & Pausing Tests

### Pause execution using Playwright Inspector

```js
await page.pause();
```

### Conditional pause (recommended)

```js
await pauseIfDebug(page);
```

Run with debug enabled:

```bash
DEBUG=true npm run test:headed
```

---

## ⚠️ Important Notes

* ❌ Do NOT commit `node_modules/`
* ❌ Do NOT commit Playwright browser binaries
* Browsers are installed **locally per machine** (expected behavior)
* Credentials should be moved to environment variables for shared usage

---

## 👥 Team Usage (Quick Start)

For a new team member:

1. Clone the repository
2. Run `npm install`
3. Run `npm test`

That’s it ✅
No additional setup required.

---

## 📌 Best Practices Followed

* Page Object Model (POM)
* Chromium-only execution
* Alphabet-safe random test data
* Debug-friendly setup
* CI-ready structure

---

## 📞 Support

If you face any issues:

* Ensure Node.js is installed correctly
* Try running tests in headed mode
* Review Playwright configuration
* Contact the project maintainer

---

Happy Testing 🚀

```



Just tell me 👍
```
