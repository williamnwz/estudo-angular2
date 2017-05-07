import { CanalTecnicoPage } from './app.po';

describe('canal-tecnico App', () => {
  let page: CanalTecnicoPage;

  beforeEach(() => {
    page = new CanalTecnicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
