import styled, { DefaultTheme, css } from 'styled-components';

import { VariantBanner } from './banner.types';

const variantStyles = (theme: DefaultTheme) => ({
  inform: css`
    background-color: ${theme.colors.teal[50]};
    color: ${theme.colors.teal[600]};
  `,
  attention: css`
    background-color: ${theme.colors.neutral[700]};
    color: ${theme.colors.neutral[0]};
  `,
});

export const Box = styled.div<{ $variant?: VariantBanner }>`
  padding: 6px 8px;
  border-radius: 4px;
  width: max-content;
  ${({ $variant = 'inform', theme }) => variantStyles(theme)[$variant]}
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
