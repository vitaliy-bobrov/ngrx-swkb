import { Action } from '@ngrx/store';
import { HeroesResponse } from './models/hero';
import { HttpErrorResponse } from '@angular/common/http';

export enum HeroesActionTypes {
  FetchHeroes = '[Heroes] Fetch Heroes',
  FetchHeroesSuccess = '[Heroes] Load Heroes Success',
  FetchHeroesError = '[Heroes] Load Heroes Error',
  ChangePage = '[Heroes] Change page'
}

export enum Pagination {
  NEXT,
  PREV
}

export class FetchHeroes implements Action {
  readonly type = HeroesActionTypes.FetchHeroes;
}

export class FetchHeroesSuccess implements Action {
  readonly type = HeroesActionTypes.FetchHeroesSuccess;

  constructor(public payload: HeroesResponse) {}
}

export class FetchHeroesError implements Action {
  readonly type = HeroesActionTypes.FetchHeroesError;

  constructor(public payload: HttpErrorResponse) {}
}

export class ChangePage implements Action {
  readonly type = HeroesActionTypes.ChangePage;

  constructor(public payload: Pagination) {}
}

export type HeroesActions = FetchHeroes | FetchHeroesSuccess | FetchHeroesError | ChangePage;
