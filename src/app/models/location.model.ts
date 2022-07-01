export interface Location {
  info: LocationInfo;
  results: LocationResults[];
}

interface LocationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface LocationResults {
  id: number;
  name: string;
  type: string;
  dimension: string;
  url: string;
  created: string;
}
