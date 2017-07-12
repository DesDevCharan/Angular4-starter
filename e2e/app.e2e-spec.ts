import { MyFirstAng4Page } from './app.po';

describe('my-first-ang4 App', () => {
  let page: MyFirstAng4Page;

  beforeEach(() => {
    page = new MyFirstAng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
