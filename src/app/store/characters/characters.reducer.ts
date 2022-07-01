import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './characters.actions';
import { Character, CharacterResults } from '../../models/character.model';

export const initialState: CharacterResults[] = [];

export const charactersReducer = createReducer(
  initialState,
  on(CharacterActions.getCharacters, (state, { characters }) => characters)
);
