import { test } from '../app/fixtures/pageFixture';

test('Setup storage state', async ({ loginPage, context }) => {
  const cookieFilePath = './.auth/user.json';

  await loginPage.login();

  await context.storageState({ path: cookieFilePath });
});
