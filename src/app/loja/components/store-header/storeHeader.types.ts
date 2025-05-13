export interface StoreHeaderProps {
  name: string;
  logoUrl: string;
  isFavorite?: boolean;
  onShare?: () => void;
  onFavoriteToggle?: () => void;
  linkToDetails: string;
}
