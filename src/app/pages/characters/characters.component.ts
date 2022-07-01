import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersService } from '../../services/character.service';
import * as CharacterSelectors from '../../store/characters/characters.selectors';
import * as CharacterActions from '../../store/characters/characters.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$ = this.store.select(CharacterSelectors.selectAllCharacters);

  constructor(
    private store: Store,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((characters) => {
      this.store.dispatch(CharacterActions.getCharacters({ characters }));
    });
  }
}
