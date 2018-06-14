import {
  ActionReducer,
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
