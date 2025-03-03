import { getTodayDate } from '../utils/getTodayDate';
import { BasePage } from './BasePage';

export class ObjectivesPage extends BasePage {
  private objectivesLocator = this.page.getByRole('link', { name: 'Objectives' });

  private createObjectiveButtonLocator = this.page.getByRole('button', {
    name: 'Create Objective',
  });

  private nameLocator = this.page.getByRole('textbox', {
    name: "Enter Your Objective's Name",
  });

  private startDateLocator = this.page
    .getByTestId('objective-start-date-field')
    .getByRole('textbox', { name: 'Select a Date' });

  private addObjectiveButtonLocator = this.page.getByRole('button', { name: 'Add Objective' });

  private doneButtonLocator = this.page.getByRole('button', { name: 'Done' });

  public objectiveHeadLocator = () => this.page.getByRole('heading', { name: 'Test objective' });

  async goto() {
    await super.goto();
  }

  async openOjectives() {
    await this.objectivesLocator.click();
  }

  async createObjective(name: string) {
    await this.createObjectiveButtonLocator.click();
    await this.nameLocator.fill(name);
    await this.startDateLocator.fill(getTodayDate());
    await this.addObjectiveButtonLocator.click();
    await this.doneButtonLocator.click();
  }
}
