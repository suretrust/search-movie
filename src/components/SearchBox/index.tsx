import { ChangeEvent, FormEvent } from 'react';
import './style.css';

interface Props {
  searchQuery: string;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchQuery, handleChange, handleSearch }: Props) => {
  return (
    <form onSubmit={handleSearch}>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Enter a movie title'
          value={searchQuery}
          onChange={handleChange}
          autoFocus
          required
        />
        <button type='submit' disabled={!searchQuery}>
          Search Movie
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
