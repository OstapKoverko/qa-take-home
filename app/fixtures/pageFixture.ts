import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ObjectivesPage } from '../pages/ObjectivesPage';

type Pages = {
  loginPage: LoginPage;
  objectivesPage: ObjectivesPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  objectivesPage: async ({ page }, use) => {
    await use(new ObjectivesPage(page));
  },
});
