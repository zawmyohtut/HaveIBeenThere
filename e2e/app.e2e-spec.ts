import { HaveIBeenTherePage } from './app.po';

describe('have-ibeen-there App', function() {
  let page: HaveIBeenTherePage;

  beforeEach(() => {
    page = new HaveIBeenTherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
