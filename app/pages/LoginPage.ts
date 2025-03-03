import { BasePage } from './BasePage';
import { getAuthData } from '../utils/getAuthData';

export class LoginPage extends BasePage {
  private loginLocator = this.page.getByRole('textbox', { name: 'Email' });
  private passwordLocator = this.page.getByRole('textbox', { name: 'Password' });
  private loginButtonLocator = this.page.getByRole('button', { name: 'Login' });

  async goto(url?: string) {
    await super.goto(url);
  }

  async login() {
    const authData = getAuthData();

    await this.goto();
    await this.loginLocator.fill(authData.email);
    await this.passwordLocator.fill(authData.password);
    await this.loginButtonLocator.click();
  }
}
