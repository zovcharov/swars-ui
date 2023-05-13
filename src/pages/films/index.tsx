import { Box, Heading } from '@chakra-ui/react';
import { withAppLayout } from '@/features/AppLayout';
import FilmsList from '@/features/FilmsList';
import { NextPageWithLayout } from '@/shared/types/common.types';

const FilmsPage: NextPageWithLayout = () => {
  return (
    <Box>
      <Heading color="purple.800" mb={5}>
        Films
      </Heading>
      <FilmsList />
    </Box>
  );
};

export default withAppLayout(FilmsPage);
