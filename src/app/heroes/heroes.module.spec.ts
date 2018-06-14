import { HeroesModule } from './heroes.module';

describe('HeroesModule', () => {
  let heroesModule: HeroesModule;

  beforeEach(() => {
    heroesModule = new HeroesModule();
  });

  it('should create an instance', () => {
    expect(heroesModule).toBeTruthy();
  });
});
