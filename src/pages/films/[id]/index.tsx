import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Skeleton, VStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { getFilm } from '@/api';
import { withAppLayout } from '@/features/AppLayout';

export function FilmPage() {
  const { query } = useRouter();

  const { data, isLoading } = useSWR(`/api/films/${query.id}`, () =>
    getFilm(query.id as string)
  );

  const getItemIdByUrl = (url: string) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length - 2];
  };

  if (isLoading) {
    return (
      <Box>
        <Skeleton w="300px" h="32px" mb={10} />
        <Skeleton w="150px" h="16px" mb={2} />
        <Skeleton w="150px" h="16px" mb={2} />
        <Skeleton w="150px" h="16px" mb={2} />
        <Skeleton w="150px" h="16px" mb={2} />
        <Skeleton w="150px" h="16px" mb={2} />
      </Box>
    );
  }

  return (
    <>
      <Heading color="purple.800" mb={10}>
        {data?.title}
      </Heading>
      <VStack spacing={3} alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          Director:
          <Text as="i" fontSize="xl" color="purple.500">
            {data?.director}
          </Text>
        </Flex>

        <Flex alignItems="center" gap={2}>
          Producer:
          <Text as="i" fontSize="xl" color="purple.500">
            {data?.producer}
          </Text>
        </Flex>

        <Box gap={2}>
          Opening crawl:
          <br />
          <br />
          <Text color="purple.300">{data?.opening_crawl}</Text>
        </Box>
      </VStack>

      {Boolean(data?.characters?.length) && (
        <>
          <Heading color="purple.700" size="sm" mt={6} mb={6}>
            Characters
          </Heading>
          <VStack alignItems="flex-start">
            {data?.characters.map((character, index) => (
              <Link
                color="purple.500"
                href={`/people/${getItemIdByUrl(character)}`}
                key={character}
              >
                Character {index + 1}
              </Link>
            ))}
          </VStack>
        </>
      )}
    </>
  );
}

export default withAppLayout(FilmPage);
