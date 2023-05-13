import Icon, { IconsList } from "@/uikit/Icon";
import { Link } from "@chakra-ui/next-js";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  url: string;
  icon: IconsList;
  isActive?: boolean;
}

export default function SidebarLink(props: Props) {
  const { url, icon, isActive, children } = props;

  return (
    <Link
      href={url}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h={10}
      borderRadius="lg"
      bgColor={isActive ? "purple.50" : 'transparent'}
      color={isActive ? "purple.600" : 'gray.600'}
      px={2}
      _hover={{
        textDecoration: 'none',
        color: 'purple.600'
      }}
    >
      <Icon as={icon} mr={2} boxSize={5} />
      {children}
    </Link>
  )
}