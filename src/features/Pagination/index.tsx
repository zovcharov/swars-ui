import { Nullable } from '@/shared/types/common.types';
import Icon from '@/shared/uikit/Icon';
import { Button, HStack, Text } from '@chakra-ui/react';

interface Props {
  curPage: number;
  nextPageUrl?: Nullable<string>;
  prevPageUrl?: Nullable<string>;
  onNext: () => void;
  onPrev: () => void;
}

export default function Pagination(props: Props) {
  const { curPage, nextPageUrl, prevPageUrl, onNext, onPrev } = props;

  return (
    <HStack spacing={4} mt={5} justifyContent="center">
      <Button variant="outline" isDisabled={!prevPageUrl} onClick={onPrev}>
        <Icon as="ArrowLeft2" color="purple.600" />
      </Button>
      <Button>
        <Text color="purple.800">{curPage}</Text>
      </Button>
      <Button variant="outline" isDisabled={!nextPageUrl} onClick={onNext}>
        <Icon as="ArrowRight2" color="purple.600" />
      </Button>
    </HStack>
  );
}
