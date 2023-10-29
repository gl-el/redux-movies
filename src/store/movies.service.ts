// ключи ни в коем случае нельзя выкладывать на фронт
// если очень надо, то хотя бы не хардкодить, а выносить в енвы
const KEY = '6c6d1102';
const API_URL = 'https://www.omdbapi.com/';

export const fetchByQuery = (query: string, page: number) => {
  return fetch(`${API_URL}?apikey=${KEY}&s=${query}&p=${page}`);
};

export const fetchById = (id: string) => {
  return fetch(`${API_URL}?apikey=${KEY}&i=${id}`);
};

export const MoviesService = { fetchByQuery, fetchById };
