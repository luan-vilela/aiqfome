'use client';

import { Box, Description } from './banner.styles';
import { BannerProps } from './banner.types';

const Banner: React.FC<BannerProps> = ({ variant = 'inform', children, ...props }) => {
  return (
    <>
      {children && (
        <Box $variant={variant} {...props}>
          <Description>{children}</Description>
        </Box>
      )}
    </>
  );
};

export default Banner;
