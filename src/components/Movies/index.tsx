import { SingleMovieType } from '../../types/movies';
import SingleMovie from '../SingleMovie';
import './style.css';

interface Props {
  filteredMovies: SingleMovieType[] | undefined;
}

const Movies = ({ filteredMovies }: Props) => {
  if (!filteredMovies?.length) {
    return (
      <div className='no-movie'>
        No movie with such name, enter text above to search.
      </div>
    );
  }

  return (
    <div className='movies-list'>
      {filteredMovies.map((movie: SingleMovieType) => (
        <SingleMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
