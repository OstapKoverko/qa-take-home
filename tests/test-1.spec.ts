// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://public.dev-go-maestro.com/users/sign_in');
//   await page.getByRole('textbox', { name: 'Email' }).fill('ostap.koverko@gmail.com');
//   await page.getByRole('textbox', { name: 'Email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456Aa');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Objectives' }).click();
//   await page.getByRole('button', { name: 'Create Objective' }).click();
//   await page.getByRole('textbox', { name: "Enter Your Objective's Name" }).click();
//   await page.getByRole('textbox', { name: "Enter Your Objective's Name" }).fill('Test objective');
//   await page
//     .getByTestId('objective-start-date-field')
//     .getByRole('textbox', { name: 'Select a Date' })
//     .click();
//   await page
//     .getByTestId('objective-start-date-field')
//     .getByRole('textbox', { name: 'Select a Date' })
//     .fill('03.03.2025');
//   await page
//     .getByTestId('objective-start-date-field')
//     .getByRole('textbox', { name: 'Select a Date' })
//     .press('Enter');
// });
// await page.getByRole('button', { name: 'Add Objective' }).dblclick();
// await page.getByRole('button', { name: 'Done' }).dblclick();
// await page.getByRole('button', { name: 'Not Started' }).click();
// await page.getByRole('button', { name: 'On Track' }).click();
// await page.locator('div').filter({ hasText: 'Objective successfully updated' }).nth(3).click({
//   button: 'right',
// });
// await expect(page.getByText('Objective successfully updated')).toBeVisible();
// await page.getByRole('button', { name: 'Icon.Menu' }).click();
// await page.getByRole('button', { name: 'Archive Objective' }).click();
// await page.getByRole('button', { name: 'Confirm' }).dblclick();
// await expect(page.getByRole('heading', { name: 'No Objectives Exist' })).toBeVisible();
