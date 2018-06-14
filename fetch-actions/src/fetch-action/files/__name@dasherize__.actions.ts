import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum <%= classify(name) %>ActionTypes {
  Fetch<%= classify(name) %> = '[<%= classify(name) %>] Fetch <%= classify(name) %>',
  Fetch<%= classify(name) %>Success = '[<%= classify(name) %>] Fetch <%= classify(name) %> Success',
  Fetch<%= classify(name) %>Error = '[<%= classify(name) %>] Fetch <%= classify(name) %> Error'
}

export class <%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Fetch<%= classify(name) %>;
}

export class <%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Fetch<%= classify(name) %>Success;

  constructor(public payload: any) {}
}

export class <%= classify(name) %>Error implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Fetch<%= classify(name) %>Error;

  constructor(public payload: HttpErrorResponse) {}
}

export type <%= classify(name) %>Actions = Fetch<%= classify(name) %> |
Fetch<%= classify(name) %>Success |
Fetch<%= classify(name) %>Error;
