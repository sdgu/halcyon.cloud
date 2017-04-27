import { Halcyon.CloudPage } from './app.po';

describe('halcyon.cloud App', () => {
  let page: Halcyon.CloudPage;

  beforeEach(() => {
    page = new Halcyon.CloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
