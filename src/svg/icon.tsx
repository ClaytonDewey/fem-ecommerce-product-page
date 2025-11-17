import {
  IconCart,
  IconClose,
  IconDelete,
  IconLogo,
  IconMenu,
  IconMinus,
  IconNext,
  IconPlus,
  IconPrevious,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'cart':
      return <IconCart />;
    case 'close':
      return <IconClose />;
    case 'delete':
      return <IconDelete />;
    case 'logo':
      return <IconLogo />;
    case 'menu':
      return <IconMenu />;
    case 'minus':
      return <IconMinus />;
    case 'next':
      return <IconNext />;
    case 'plus':
      return <IconPlus />;
    case 'previous':
      return <IconPrevious />;
    default:
      return <IconLogo />;
  }
};

export default Icon;
