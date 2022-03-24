import { SingleMovieType } from '../types/movies';

export const getFilteredMovies = (
  filteredMovies: SingleMovieType[] | undefined,
  ageQuery: number
) => {
  if (!ageQuery) return filteredMovies;
  if (!filteredMovies?.length) return [];

  return filteredMovies.filter((movie) => {
    const [movieAge] = movie.age.split('+');

    return movieAge.toLowerCase() === 'all' || Number(movieAge) >= ageQuery;
  });
};
