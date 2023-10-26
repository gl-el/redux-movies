const KEY = '6c6d1102';
const API_URL = 'http://www.omdbapi.com/';

export const fetchByQuery = async (query: string, page: number) => {
  const res = await fetch(`${API_URL}?apikey=${KEY}&s=${query}&p=${page}`);
  return res;
};

export const fetchById = async (id: string) => {
  const res = await fetch(`${API_URL}?apikey=${KEY}&i=${id}`);
  return res;
};

export const MoviesService = { fetchByQuery, fetchById };
