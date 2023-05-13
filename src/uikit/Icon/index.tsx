import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import * as Icons from 'iconsax-react';

export type IconsList = keyof typeof Icons;

interface Props extends ChakraIconProps {
  as: IconsList
}

export default function Icon(props: Props) {
  const { as, ...rest } = props;

  return <ChakraIcon as={Icons[as]} {...rest} />
}