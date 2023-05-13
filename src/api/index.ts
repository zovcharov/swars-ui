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

export const getPeople = async (): Promise<APIListResponse<Person>> =>
  await ky.get(generateApiUrl('/people')).json();