import { getPerson } from '@/api';
import { withAppLayout } from '@/features/AppLayout';
import Icon from '@/shared/uikit/Icon';
import getGenderIcon from '@/shared/utils/getGenderIcon';
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Skeleton, VStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export function PersonPage() {
  const { query } = useRouter();

  const { data, isLoading } = useSWR(`/api/people/${query.id}`, () =>
    getPerson(query.id as string)
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
        {data?.name}
      </Heading>
      <VStack spacing={3} alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          <Icon
            boxSize={6}
            as={getGenderIcon(data?.gender ?? '')}
            color="purple.500"
          />
          <Text as="i" fontSize="xl">
            {data?.gender}
          </Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon boxSize={6} as="Eye" color="purple.500" />
          <Text as="i" fontSize="xl">
            {data?.eye_color}
          </Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon boxSize={6} as="Ruler" color="purple.500" />
          <Text as="i" fontSize="xl">
            {data?.height} sm
          </Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon boxSize={6} as="WeightMeter" color="purple.500" />
          <Text as="i" fontSize="xl">
            {data?.mass} kg
          </Text>
        </Flex>
      </VStack>

      {Boolean(data?.films?.length) && (
        <>
          <Heading color="purple.700" size="sm" mt={6} mb={6}>
            Films
          </Heading>
          <VStack alignItems="flex-start">
            {data?.films.map((film, index) => (
              <Link
                color="purple.500"
                href={`/films/${getItemIdByUrl(film)}`}
                key={film}
              >
                Film {index + 1}
              </Link>
            ))}
          </VStack>
        </>
      )}
    </>
  );
}

export default withAppLayout(PersonPage);
