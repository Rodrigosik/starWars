import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { starWarsApiModel } from 'src/app/utils/models';

@Injectable()
export class StarwarsService {
  constructor(private http: HttpClient) {}

  getDataStarWars(): Observable<starWarsApiModel[]> {
    return this.http.get<starWarsApiModel[]>(
      'https://akabab.github.io/starwars-api/api/all.json'
    );
  }
}
