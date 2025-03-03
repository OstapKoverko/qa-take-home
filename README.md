# MAESTO-TEST-ASSESSMENT

## ⚡ Playwright Installation

To set up this Playwright project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone <repo-url>
   cd qa-take-home
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Install Playwright and browsers:**

   ```sh
   npx playwright install
   ```

---

## 🎨 Prettier Setup

The project already includes a **.prettierrc.json** configuration file. To enable Prettier:

1. Install Prettier globally (optional):

   ```sh
   npm install --global prettier
   ```

2. Format files according to the configuration:

   ```sh
   npx prettier --write .
   ```

3. Add Prettier as a pre-commit hook (optional):

   ```sh
   npm install --save-dev husky lint-staged
   npx husky add .husky/pre-commit "npx lint-staged"
   ```

4. **Formatting in IDE:**

   - Install **Prettier - Code formatter** extension in VS Code.
   - Enable **Format on Save** in VS Code settings.

---

## 🚀 Running Tests

Run all tests:

```sh
npx playwright test
```

Run tests from a specific file:

```sh
npx playwright test tests/test-1.spec.ts
```

Run in debug mode:

```sh
npx playwright test --debug
```

Run in headed mode (with browser UI):

```sh
npx playwright test --headed
```

Generate an HTML report after testing:

```sh
npx playwright show-report
```

## 📌 Additional Notes

- Use `npx playwright codegen` to generate test scripts.
- Add `"test": "npx playwright test"` to `scripts` in `package.json` for convenient test execution with `npm test`.
- Check `playwright-report/` for viewing test results in the browser.
