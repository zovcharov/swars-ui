import ky from 'ky';
import { Nullable } from '@/shared/types/common.types';
import { Person } from '@/shared/types/people.types';
import { Film } from '@/shared/types/film.types';

const BASE_API_URL = 'https://swapi.dev/api';

const generateApiUrl = (pathname: string) => `${BASE_API_URL}${pathname}`;

interface APIListResponse<T> {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: T[];
}

export const getPeople = async (
  searchString = '',
  page: number
): Promise<APIListResponse<Person>> =>
  await ky
    .get(generateApiUrl(`/people?search=${searchString}&page=${page}`))
    .json();

export const getPerson = async (id: string): Promise<Person> =>
  await ky.get(generateApiUrl(`/people/${id}`)).json();

export const getFilms = async (
  searchString = ''
): Promise<APIListResponse<Film>> =>
  await ky.get(generateApiUrl(`/films?search=${searchString}`)).json();

export const getFilm = async (id: string): Promise<Film> =>
  await ky.get(generateApiUrl(`/films/${id}`)).json();
