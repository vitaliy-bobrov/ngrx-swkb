import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHeroes from '../heroes/heroes.reducer';

export interface State {
  heroes: fromHeroes.State;
}

export const reducers: ActionReducerMap<State> = {
  heroes: fromHeroes.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getHeroesState = createFeatureSelector<fromHeroes.State>('heroes');
export const getHeroes = createSelector(getHeroesState, state => state.data);
export const getIsLoading = createSelector(getHeroesState, state => state.isLoading);
export const getCurrentPage = createSelector(getHeroesState, state => state.page);
export const getIsFirstPage = createSelector(getHeroesState, state => !state.previous);
export const getIsLastPage = createSelector(getHeroesState, state => !state.next);
