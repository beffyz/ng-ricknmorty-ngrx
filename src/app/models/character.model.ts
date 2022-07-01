export interface Character {
  info: CharactersInfo;
  results: CharacterResults[];
}

export interface CharactersInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  created: string;
  origin: CharacterResultsOrigin;
  location: CharacterResultsLocation;
}

export interface CharacterResultsOrigin {
  name: string;
  url: string;
}

export interface CharacterResultsLocation {
  name: string;
  url: string;
}
