'use client';

import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
} from '@chakra-ui/react';
import { getPeople } from '@/api';
import Icon from '@/shared/uikit/Icon';
import debounce from '@/shared/utils/debounce';

import PersonCard from './PersonCard';
import usePagination from '@/shared/hooks/usePagination';
import Pagination from '../Pagination';

export default function PeopleList() {
  const [search, setSearch] = useState('');
  const { page, onPrevPage, onNextPage } = usePagination();
  const { data, isLoading } = useSWR(
    `/api/people/search=${search}&page=${page}`,
    () => getPeople(search, page)
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedSearchChange = useCallback(
    debounce(handleSearchChange, 500),
    []
  );

  const skeleton = useMemo(
    () => (
      <Flex gap={4} flexWrap="wrap">
        <Skeleton height="200px" w="200px" borderRadius="lg" />
        <Skeleton height="200px" w="200px" borderRadius="lg" />
        <Skeleton height="200px" w="200px" borderRadius="lg" />
        <Skeleton height="200px" w="200px" borderRadius="lg" />
      </Flex>
    ),
    []
  );

  const getContent = () => {
    if (isLoading) {
      return skeleton;
    }

    return (
      <Flex gap={4} flexWrap="wrap" justifyContent="space-around">
        {data?.results.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </Flex>
    );
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
      <Pagination
        curPage={page}
        prevPageUrl={data?.previous}
        nextPageUrl={data?.next}
        onNext={onNextPage}
        onPrev={onPrevPage}
      />
    </>
  );
}
