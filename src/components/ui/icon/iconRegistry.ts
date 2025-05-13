import ArrowRightIcon from './icons/arrowRightIcon';
import CheckIcon from './icons/checkIcon';
import Delivery from './icons/deliveryIcon';
import DolarCircle from './icons/dolarCircle';
import FavoriteIcon from './icons/favoriteIcon';
import LogoIcon from './icons/logoIcon';
import MinusIcon from './icons/minus';
import Bike from './icons/motorcycleIcon';
import PlusIcon from './icons/plusIcon';
import ShareIcon from './icons/shareIcon';
import SpicyIcon from './icons/spicyIcon';
import Star from './icons/starIcon';
import TrashIcon from './icons/trashIcon';
import UserIcon from './icons/userIcon';
import VeganIcon from './icons/vegan';

export const iconRegistry = {
  bike: Bike,
  star: Star,
  delivery: Delivery,
  share: ShareIcon,
  arrowRight: ArrowRightIcon,
  favorite: FavoriteIcon,
  dolarCircle: DolarCircle,
  logo: LogoIcon,
  vegan: VeganIcon,
  spicy: SpicyIcon,
  check: CheckIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  trash: TrashIcon,
  user: UserIcon,
};

export type IconName = keyof typeof iconRegistry;
