import { IconName } from '@/components/ui/icon/iconRegistry';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  icon?: IconName;
  promo?: boolean;
};

export type CatalogListProps = {
  items: MenuItem[];
  store: string;
};
