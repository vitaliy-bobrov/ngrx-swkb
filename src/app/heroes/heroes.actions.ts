import { Action } from '@ngrx/store';

export enum HeroesActionTypes {
  LoadHeroess = '[Heroes] Load Heroess'
}

export class LoadHeroess implements Action {
  readonly type = HeroesActionTypes.LoadHeroess;
}

export type HeroesActions = LoadHeroess;
