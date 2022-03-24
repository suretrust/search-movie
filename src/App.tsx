import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import API from './api';
import './App.css';
import AgeFilter from './components/AgeFilter';
import Movies from './components/Movies';
import SearchBox from './components/SearchBox';
import { SingleMovieType } from './types/movies';
import { getFilteredMovies } from './utils';

function App() {
  const [movies, setMovies] = useState<SingleMovieType[] | undefined>([]);
  const [error, setError] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [ageQuery, setAgeQuery] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<
    SingleMovieType[] | undefined
  >([]);

  useEffect(() => {
    const getMoviesData = async () => {
      setIsLoading(true);
      const response = await API.getMovies();
      setIsLoading(false);

      const { success, movies: allMovies, error } = response;

      if (success) setMovies(allMovies);
      else setError(error);
    };

    getMoviesData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    setSearchQuery(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    setAgeQuery(Number(e.target.value));
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery || !movies?.length) return;

    setIsLoading(true);
    const currMovies = movies.filter((movie) =>
      movie.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
    setIsLoading(false);
    setFilteredMovies(currMovies);
  };

  if (isLoading) return <p className='no-movie'>Loading...</p>;

  return (
    <>
      <SearchBox
        handleChange={handleChange}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <AgeFilter handleAgeChange={handleAgeChange} ageQuery={ageQuery} />
      <Movies
        filteredMovies={getFilteredMovies(
          filteredMovies,
          typeof ageQuery === 'number' ? ageQuery : 0
        )}
      />
    </>
  );
}

export default App;
