import { test } from '../app/fixtures/pageFixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../app/pages/LoginPage';

const testData = {
  companyId: 48,
  objectiveName: 'Test objective',
};

test.use({ storageState: '.auth/user.json' });

test('Create objective', async ({ objectivesPage }) => {
  await objectivesPage.goto();
  await objectivesPage.openOjectives();
  await objectivesPage.createObjective(testData.objectiveName);

  await expect(objectivesPage.objectiveHeadLocator()).toBeVisible();
});
