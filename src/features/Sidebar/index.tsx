import { IconsList } from '@/shared/uikit/Icon';
import { VStack } from '@chakra-ui/react';
import SidebarLink from './SidebarLink';
import { useRouter } from 'next/router';

const LINKS: {
  title: string;
  url: string;
  icon: IconsList;
}[] = [
  {
    title: 'People',
    url: '/people',
    icon: 'People',
  },
  {
    title: 'Films',
    url: '/films',
    icon: 'Camera',
  },
];

export default function Sidebar() {
  const { asPath } = useRouter();

  return (
    <VStack w={36} spacing={3} pt={5} px={2}>
      {LINKS.map(({ url, title, icon }) => (
        <SidebarLink
          key={url}
          isActive={asPath.includes(url)}
          url={url}
          icon={icon}
        >
          {title}
        </SidebarLink>
      ))}
    </VStack>
  );
}
