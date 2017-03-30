import { PomodoroClockPage } from './app.po';

describe('pomodoro-clock App', () => {
  let page: PomodoroClockPage;

  beforeEach(() => {
    page = new PomodoroClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
