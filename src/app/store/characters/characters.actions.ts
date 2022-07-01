import { createAction, props } from '@ngrx/store';
import { Character, CharacterResults } from '../../models/character.model';

export const getCharacters = createAction(
  '[Character List] Get Characters',
  props<{ characters: CharacterResults[] }>()
);
