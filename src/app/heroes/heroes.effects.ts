import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HeroesActions, HeroesActionTypes } from './heroes.actions';

@Injectable()
export class HeroesEffects {

  @Effect()
  effect$ = this.actions$.ofType(HeroesActionTypes.LoadHeroess);

  constructor(private actions$: Actions) {}
}
