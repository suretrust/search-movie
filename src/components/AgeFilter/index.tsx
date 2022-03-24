import { ChangeEvent } from 'react';
import './style.css';

interface Props {
  handleAgeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ageQuery: number | undefined;
}

const AgeFilter = ({ handleAgeChange, ageQuery }: Props) => {
  return (
    <div className='filter-box'>
      <input
        type='number'
        value={ageQuery || ''}
        placeholder='Enter age to filter movies'
        onChange={handleAgeChange}
      />
    </div>
  );
};

export default AgeFilter;
