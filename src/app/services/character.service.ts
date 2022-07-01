import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, CharacterResults } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterResults[]> {
    const url = 'https://rickandmortyapi.com/api/character';

    return this.http
      .get<{ results: CharacterResults[] }>(url)
      .pipe(map((characters) => characters.results || []));
  }
}
