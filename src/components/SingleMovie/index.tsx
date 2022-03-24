import { SingleMovieType } from '../../types/movies';
import './style.css';

interface Props {
  movie: SingleMovieType;
}

const SingleMovie = ({ movie }: Props) => {
  const [movieRating] = movie.imdb.split('/');

  return (
    <div className='single-movie'>
      <h3>
        {movie.title} <small></small>
      </h3>

      <div className='star'>
        {!!movieRating && (
          <div>
            <small>&#9733;</small>
            <span>{movieRating}</span>
          </div>
        )}
        {!!movie?.age && (
          <div className='age'>{movie.age.toUpperCase() || 'N/A'}</div>
        )}
      </div>

      <section>
        {!!movie.netflix && <span>Netflix</span>}
        {!!movie.primeVideo && <span>Prime Video</span>}
        {!!movie.hulu && <span>Hulu</span>}
        {!!movie.disney && <span>Disney</span>}
      </section>
    </div>
  );
};

export default SingleMovie;
