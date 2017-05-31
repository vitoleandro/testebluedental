import { BluedentalPage } from './app.po';

describe('bluedental App', () => {
  let page: BluedentalPage;

  beforeEach(() => {
    page = new BluedentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
