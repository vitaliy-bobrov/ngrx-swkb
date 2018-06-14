import { Action } from '@ngrx/store';
import { HeroesActions, HeroesActionTypes, Pagination } from './heroes.actions';
import { Hero } from './models/hero';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: Hero[] | null;
  next: string | null;
  previous: string | null;
  page: number;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
  next: null,
  previous: null,
  page: 1
};

export function reducer(state = initialState, action: HeroesActions): State {
  switch (action.type) {

    case HeroesActionTypes.FetchHeroes:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case HeroesActionTypes.FetchHeroesSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous
      };

    case HeroesActionTypes.FetchHeroesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case HeroesActionTypes.FetchHeroesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case HeroesActionTypes.ChangePage:
      return {
        ...state,
        page: action.payload === Pagination.NEXT ? ++state.page : --state.page
      };

    default:
      return state;
  }
}
