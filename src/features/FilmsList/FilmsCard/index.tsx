import { Link } from '@chakra-ui/next-js';
import { Card, HStack, Heading, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Film } from '@/shared/types/film.types';

interface Props {
  film: Film;
}

export default function FilmCard(props: Props) {
  const {
    film: { director, producer, release_date, title, url },
  } = props;

  const id = useMemo(() => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length - 2];
  }, [url]);

  return (
    <Card w="100%" p={3} borderRadius="md">
      <Heading size="lg" color="purple.600" mb={4} noOfLines={1} title={title}>
        <Link href={`/films/${id}`}>{title}</Link>
      </Heading>
      <HStack spacing={4} alignItems="flex-start">
        <Text>
          Producer: <br />
          <Text as="span" color="purple.700">{producer}</Text>
        </Text>
        <Text>
          Director: <br />
          <Text as="span" color="purple.700">{director}</Text>
        </Text>
        <Text>
          Release date: <br />
          <Text as="span" color="purple.700">{release_date}</Text>
        </Text>
      </HStack>
    </Card>
  );
}
