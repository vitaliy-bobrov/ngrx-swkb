import { Action } from '@ngrx/store';
import { HeroesActions, HeroesActionTypes } from './heroes.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: HeroesActions): State {
  switch (action.type) {

    case HeroesActionTypes.LoadHeroess:
      return state;


    default:
      return state;
  }
}
