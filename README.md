
---

## ✅ Full `README.md`

````md
# Playwright Automation – Card Application (CMS Portal)

This repository contains **end-to-end UI automation tests** for the **Card Application flow** of the CMS Portal.  
The project is built using **Playwright (JavaScript)** and follows the **Page Object Model (POM)** design pattern to ensure maintainability, reusability, and scalability.

The goal is to allow any team member to **clone the project and run the tests with minimal setup**.

---

## 🛠 Tech Stack

- **Playwright** – UI automation framework  
- **JavaScript (ES Modules)** – Test implementation language  
- **Chromium** – Target browser  
- **Node.js (LTS)** – Runtime environment  

---

## 📁 Project Structure

```text
project-root/
│
├── tests/
│   └── pages-card-application.spec.js
│       └─ Main end-to-end test that drives the full Card Application flow
│
├── pages/
│   ├── login.page.js
│   │   └─ Handles login functionality of the CMS Portal
│   │
│   ├── cardApp.page1.js
│   │   └─ Applicant basic information (Step 1 of Card Application)
│   │
│   ├── cardApp.page2.js
│   │   └─ Identification & address information (Step 2)
│   │
│   ├── cardApp.page3.js
│   │   └─ Product & bank information (Step 3)
│   │
│   ├── cardApp.page4.js
│   │   └─ Nominee information (Step 4)
│   │
│   └── submit.page.js
│       └─ Final submit action of the Card Application
│
├── utils/
│   ├── nameGenerator.js
│   │   └─ Generates random alphabet-only full names for test data
│   │
│   └── debug.js
│       └─ Utility for conditional test pause during debugging
│
├── playwright.config.js
│   └─ Playwright configuration (timeouts, browser, maximize window, etc.)
│
├── package.json
│   └─ Project dependencies, scripts, and Playwright setup
│
├── package-lock.json
│   └─ Dependency lock file for consistent installations
│
└── README.md
    └─ Project documentation
````

---

## ✅ Prerequisites

Before running the project, ensure the following is installed:

* **Node.js (LTS version recommended)**
  👉 Download: [https://nodejs.org](https://nodejs.org)

---

## 🚀 Setup Instructions (First Time Only)

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

> ℹ️ During `npm install`, **Chromium browser will be downloaded automatically** using Playwright’s `postinstall` script.
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
* Browser launches in **maximized mode**
* Firefox and WebKit are intentionally excluded

All browser-related configuration is managed inside `playwright.config.js`.

---

## 🧩 Page Object Model (POM)

This project follows the **Page Object Model (POM)** approach.

### Why POM?

* Cleaner test code
* Easy maintenance when UI changes
* Reusable page actions
* Supports partial execution (e.g., Page 1 → Page 2 only)

Each page of the Card Application flow is implemented as a **separate module** under the `pages/` directory.

---

## 🎲 Test Data Handling

### Random Full Name Generation

* Test data such as **Full Name** is generated dynamically
* Ensures:

  * Alphabet-only values
  * High uniqueness
  * Safe for frequent executions

Example generated values:

```text
Ashik RahmanXQd
Sara KhanAbZ
John SmithPRe
```

Implementation can be found in:

```
utils/nameGenerator.js
```

---

## 🛑 Debugging & Pausing Tests

### Pause execution using Playwright Inspector

```js
await page.pause();
```

### Conditional pause (recommended for debugging)

```js
await pauseIfDebug(page);
```

Run with debug mode enabled:

```bash
DEBUG=true npm run test:headed
```

---

## ⚠️ Important Notes

* ❌ Do NOT commit `node_modules/`
* ❌ Do NOT commit Playwright browser binaries
* Browsers are installed **locally per machine**
* Credentials should be stored using environment variables for shared usage

---

## 👥 Team Usage (Quick Start)

For a new team member:

```bash
git clone <repository-url>
npm install
npm test
```

That’s it ✅
No additional setup required.

---

## 📌 Best Practices Followed

* Page Object Model (POM)
* Chromium-only execution
* Alphabet-safe dynamic test data
* Debug-friendly configuration
* CI-ready project structure

---

## 📞 Support

If you face any issues while running the project:

* Ensure Node.js is installed correctly
* Run tests in headed mode to debug UI issues
* Review `playwright.config.js`
* Contact the project maintainer

---

Happy Testing 🚀

```

---

```
