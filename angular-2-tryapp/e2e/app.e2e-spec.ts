import { Angular2TryappPage } from './app.po';

describe('angular-2-tryapp App', function() {
  let page: Angular2TryappPage;

  beforeEach(() => {
    page = new Angular2TryappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
