import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, expand, Observable, reduce } from 'rxjs';
import { Person, PersonResponse } from '../../models/people';
import { Starship, StarshipResponse } from '../../models/starship';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private readonly swapiURL = 'https://swapi.dev/api';
  private readonly peopleURL = `${this.swapiURL}/people`;
  private readonly starshipURL = `${this.swapiURL}/starships`;
  
  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Person[]> {
    return this.fetchPeoplePage(this.peopleURL).pipe(
      expand((peopleResponse) => {
        if (peopleResponse.next) {
          return this.fetchPeoplePage(peopleResponse.next);
        }
        return EMPTY;
      }),
      reduce<PersonResponse, Person[]>((acc, response) => [...acc, ...response.results], [])
    );  
  }

  getAllStarships(): Observable<Starship[]> {
    return this.fetchStarshipsPage(this.starshipURL).pipe(
      expand((starshipResponse) => {
        if (starshipResponse.next) {
          return this.fetchStarshipsPage(starshipResponse.next);
        }
        return EMPTY;
      }),
      reduce<StarshipResponse, Starship[]>((acc, response) => [...acc, ...response.results], [])
    );
  }

  private fetchPeoplePage(url: string): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(url);
  }

  private fetchStarshipsPage(url: string): Observable<StarshipResponse> {
    return this.http.get<StarshipResponse>(url);
  }
}
