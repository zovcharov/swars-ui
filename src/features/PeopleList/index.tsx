'use client';

import { getPeople } from '@/api';
import { Flex, Input, InputGroup, InputLeftAddon, Skeleton } from '@chakra-ui/react';
import useSWR from 'swr';
import PersonCard from './PersonCard';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import Icon from '@/uikit/Icon';
import debounce from '@/utils/debounce';

export default function PeopleList() {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useSWR(
    `/api/people/search=${search}`,
    () => getPeople(search)
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const debouncedSearchChange = useCallback(
    debounce(handleSearchChange, 500),
    []
  )

  const skeleton = useMemo(() => (
    <Flex gap={4} flexWrap="wrap">
      <Skeleton height="300px" w="200px" borderRadius="lg" />
      <Skeleton height="300px" w="200px" borderRadius="lg" />
      <Skeleton height="300px" w="200px" borderRadius="lg" />
      <Skeleton height="300px" w="200px" borderRadius="lg" />
    </Flex>
  ), []);

  const getContent = () => {
    if (isLoading) {
      return skeleton;
    }

    return (
      <Flex gap={4} flexWrap="wrap">
        {data?.results.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </Flex>
    )
  };

  return (
    <>
      <InputGroup mb={6} w="500px">
        <InputLeftAddon>
          <Icon as="SearchNormal" />
        </InputLeftAddon>
        <Input onChange={debouncedSearchChange} />
      </InputGroup>
      {getContent()}
    </>
  )
}