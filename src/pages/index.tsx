import { Box, Card, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleFilmsClick = () => router.push('/films');
  const handlePeopleClick = () => router.push('/people');

  return (
    <>
      <Head>
        <title>StarWars UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box p={10}>
          <Heading color="purple.800" mb={14}>Select info you need</Heading>
          <Flex gap={6} justifyContent="space-around" flexWrap="wrap">
            <Card
              onClick={handlePeopleClick}
              w="30%"
              py={6}
              px={10}
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="purple.50"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.05)'
              }}
            >
              <Heading color="purple.600">People</Heading>
            </Card>
            <Card
              onClick={handleFilmsClick}
              w="30%"
              py={6}
              px={10}
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="purple.50"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.05)'
              }}
            >
              <Heading color="purple.600">Films</Heading>
            </Card>
          </Flex>
        </Box>
      </main>
    </>
  );
}
