import { Person } from '@/shared/types/people.types';
import Icon from '@/shared/uikit/Icon';
import { Link } from '@chakra-ui/next-js';
import { Card, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import getGenderIcon from '@/shared/utils/getGenderIcon';

interface Props {
  person: Person;
}

export default function PersonCard(props: Props) {
  const {
    person: { name, gender, eye_color, height, mass, url },
  } = props;

  const id = useMemo(() => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length - 2];
  }, [url]);

  return (
    <Card height="200px" w="200px" p={3} borderRadius="md">
      <Heading size="lg" color="purple.600" mb={4} noOfLines={1} title={name}>
        <Link href={`/people/${id}`}>{name}</Link>
      </Heading>
      <VStack spacing={1} alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          <Icon as={getGenderIcon(gender)} color="purple.500" />
          <Text as="i">{gender}</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as="Eye" color="purple.500" />
          <Text as="i">{eye_color}</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as="Ruler" color="purple.500" />
          <Text as="i">{height} sm</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Icon as="WeightMeter" color="purple.500" />
          <Text as="i">{mass} kg</Text>
        </Flex>
      </VStack>
    </Card>
  );
}
