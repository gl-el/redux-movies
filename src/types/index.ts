export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MoviesSearch {
  Response: 'True' | 'False';
  Search?: Movie[];
  Error?: string;
  totalResults?: string;
}

export interface MovieDetails extends Movie {
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
  Plot: string;
  Actors: string;
  Director: string;
  userRate?: string;
}

export type MovieSaved = Omit<MovieDetails, 'Actors' | 'Director' | 'Genre' | 'Plot' | 'Year' | 'Released'>;

export const Status = ['pending', 'success', 'error', 'idle'] as const;
export type Status = (typeof Status)[number];
