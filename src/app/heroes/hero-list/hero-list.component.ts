import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../heroes.reducer';
import { FetchHeroes, ChangePage, Pagination } from '../heroes.actions';
import {
  getHeroes,
  getIsLoading,
  getIsFirstPage,
  getIsLastPage
} from '../../reducers/index';
import { Hero } from '../models/hero';

@Component({
  selector: 'swkb-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isFirst$: Observable<boolean>;
  isLast$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.heroes$ = this.store.select(getHeroes);
    this.isFirst$ = this.store.select(getIsFirstPage);
    this.isLast$ = this.store.select(getIsLastPage);
    this.isLoading$ = this.store.select(getIsLoading);

    this.store.dispatch(new FetchHeroes());
  }

  prev() {
    this.store.dispatch(new ChangePage(Pagination.PREV));
  }

  next() {
    this.store.dispatch(new ChangePage(Pagination.NEXT));
  }

  trackByUrl(index: number, hero: Hero): string {
    return hero.url;
  }
}
