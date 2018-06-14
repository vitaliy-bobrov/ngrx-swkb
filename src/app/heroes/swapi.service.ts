import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HeroesResponse } from './models/hero';

@Injectable()
export class SwapiService {
  private readonly baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  getHeroes(page?: number): Observable<HeroesResponse> {
    const options = {
      params: {}
    };
    const link = `${this.baseUrl}people/`;

    if (page) {
      options.params = { page };
    };

    return this.http.get<HeroesResponse>(link, options);
  }

  searchForHero(lookup: string): Observable<HeroesResponse> {
    const link = `${this.baseUrl}people/`;
    const options = {
      params: {
        search: lookup
      }
    };

    return this.http.get<HeroesResponse>(link, options);
  }
}
