import { IconsList } from '@/shared/uikit/Icon';

export default function getGenderIcon(gender: string): IconsList {
  switch (gender) {
    case 'male':
      return 'Man';
    case 'female':
      return 'Woman';
    default:
      return 'MessageQuestion';
  }
}
