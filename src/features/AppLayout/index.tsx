import { NextPageWithLayout } from '@/shared/types/common.types';
import { Box, Flex } from '@chakra-ui/react';
import { PropsWithChildren, ReactElement } from 'react';

import Sidebar from '../Sidebar';

export default function AppLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Flex h="100vh">
      <Box as="aside">
        <Sidebar />
      </Box>
      <Box
        bgColor="gray.50"
        as="main"
        flex="1"
        p={5}
        maxH="100vh"
        overflowY="auto"
      >
        {children}
      </Box>
    </Flex>
  );
}

export function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}

export function withAppLayout(Component: NextPageWithLayout) {
  Component.getLayout = getLayout;

  return Component;
}
