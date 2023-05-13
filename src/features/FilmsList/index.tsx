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
import { getFilms } from '@/api';
import Icon from '@/shared/uikit/Icon';
import debounce from '@/shared/utils/debounce';

import FilmCard from './FilmCard';

export default function FilmsList() {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useSWR(`/api/films/search=${search}`, () =>
    getFilms(search)
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
      <Flex gap={4} flexDirection="column">
        <Skeleton height="150px" w="100%" borderRadius="lg" />
        <Skeleton height="150px" w="100%" borderRadius="lg" />
        <Skeleton height="150px" w="100%" borderRadius="lg" />
        <Skeleton height="150px" w="100%" borderRadius="lg" />
      </Flex>
    ),
    []
  );

  const getContent = () => {
    if (isLoading) {
      return skeleton;
    }

    return (
      <Flex gap={4} flexWrap="wrap">
        {data?.results.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
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
    </>
  );
}
