import { createFeatureSelector, createSelector } from '@ngrx/store';
import {Character, CharacterResults} from '../../models/character.model';

export const selectCharacters =
  createFeatureSelector<CharacterResults[]>('characters');

export const selectAllCharacters = createSelector(
  selectCharacters,
  (characters) => {
    return characters;
  }
);
