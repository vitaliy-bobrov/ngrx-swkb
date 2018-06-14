import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HeroesEffects } from './heroes.effects';

describe('HeroesService', () => {
  let actions$: Observable<any>;
  let effects: HeroesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(HeroesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
