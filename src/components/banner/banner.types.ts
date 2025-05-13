import { HTMLAttributes } from 'react';

export type VariantBanner = 'inform' | 'attention';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: VariantBanner;
}
