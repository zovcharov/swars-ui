'use client';

import { getPeople } from '@/api';
import useSWR from 'swr';

export default function PeopleList() {
  // const { data } = useSWR('/api/people', getPeople);

  return (
    <>People</>
  )
}