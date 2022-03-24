import axios from 'axios';
import { SingleMovieType } from '../types/movies';

const BASE_URL = 'https://fake-server9.herokuapp.com';

const cachedMovies = { data: [] };

const getMovies = async () => {
  if (cachedMovies.data?.length) {
    return { success: true, movies: cachedMovies.data };
  }

  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    cachedMovies.data = response.data;

    return { success: true, movies: response.data as SingleMovieType[] };
  } catch (error) {
    return {
      success: false,
      error: 'Fetching movies failed, please refresh to try again',
    };
  }
};

const API = {
  getMovies,
};

export default API;
