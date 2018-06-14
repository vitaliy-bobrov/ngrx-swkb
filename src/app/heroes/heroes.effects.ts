import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { getCurrentPage } from '../reducers/index';
import { State } from './heroes.reducer';
import { SwapiService } from './swapi.service';
import {
  HeroesActionTypes,
  HeroesActions,
  FetchHeroes,
  FetchHeroesSuccess,
  FetchHeroesError
} from './heroes.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class HeroesEffects {
  @Effect()
  fetch$: Observable<HeroesActions> = this.actions$
    .ofType(HeroesActionTypes.FetchHeroes)
    .pipe(
      withLatestFrom(this.store),
      switchMap(([action, state]) =>
        this.service.getHeroes(getCurrentPage(state)).pipe(
          map(data => new FetchHeroesSuccess(data)),
          catchError(err => of(new FetchHeroesError(err)))
        )
      )
    );

  @Effect()
  paginate$: Observable<HeroesActions> = this.actions$
    .ofType(HeroesActionTypes.ChangePage)
    .pipe(
      map(() => new FetchHeroes())
    );

  constructor(private actions$: Actions,
              private store: Store<State>,
              private service: SwapiService) {}
}
