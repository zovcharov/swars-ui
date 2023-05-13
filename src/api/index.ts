import { Nullable } from '@/types/common.types';
import { Person } from '@/types/people.types';
import ky from 'ky';

const BASE_API_URL = 'https://swapi.dev/api';

const generateApiUrl = (pathname: string) => `${BASE_API_URL}${pathname}`;

interface APIListResponse<T> {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: T[];
}

export const getPeople = async (searchString = ''): Promise<APIListResponse<Person>> =>
  await ky.get(generateApiUrl(`/people?search=${searchString}`)).json();

export const getPerson = async (id: string): Promise<Person> =>
  await ky.get(generateApiUrl(`/people/${id}`)).json();