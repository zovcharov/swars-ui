import { withAppLayout } from '@/features/AppLayout';
import PeopleList from '@/features/PeopleList';
import { NextPageWithLayout } from '@/shared/types/common.types';
import { Box, Heading } from '@chakra-ui/react';

const PeoplePage: NextPageWithLayout = () => {
  return (
    <Box>
      <Heading color="purple.800" mb={5}>
        People
      </Heading>
      <PeopleList />
    </Box>
  );
};

export default withAppLayout(PeoplePage);
