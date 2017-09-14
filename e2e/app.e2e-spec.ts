import { BlackseacenterPage } from './app.po';

describe('blackseacenter App', () => {
  let page: BlackseacenterPage;

  beforeEach(() => {
    page = new BlackseacenterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
