import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export default extendTheme(
  {
    fonts: {
      heading: 'var(--font-roboto)',
      body: 'var(--font-roboto)',
    },
  }, 
  withDefaultColorScheme({ colorScheme: 'purple' })
);