import { withAppLayout } from "@/features/AppLayout";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function PersonPage() {
  const { query } = useRouter();

  return (
    <Box>
      {query.id}
    </Box>
  )
}

export default withAppLayout(PersonPage);
