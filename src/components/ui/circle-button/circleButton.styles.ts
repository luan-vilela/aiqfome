import styled, { DefaultTheme, css } from 'styled-components';

import { CircleButtonProps } from './circleButton.types';

const sizeStyles = {
  md: css`
    width: 40px;
    height: 40px;

    svg:first-child {
      width: 18px;
      height: 18px;
    }
  `,
  sm: css`
    width: 32px;
    height: 32px;

    svg:first-child {
      width: 11px;
      height: 11px;
    }
  `,
  xs: css`
    width: 24px;
    height: 24px;

    svg:first-child {
      width: 8px;
      height: 8px;
    }
  `,
};

const commonNormalStyles = css`
  border: none;
`;

const commonIconStyles = css`
  background-color: transparent;
  border: none;
`;

const normalStyles = (theme: DefaultTheme) => ({
  primary: {
    rest: css`
      ${commonNormalStyles}
      border: 1px solid ${theme.colors.teal[400]};
      color: ${theme.colors.teal[400]};
      background-color: ${theme.colors.neutral[0]};
    `,
    hover: css`
      background-color: ${theme.colors.teal[50]};
    `,
    disabled: css`
      border: none;
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[400]};
      cursor: default;
    `,
  },
  secondary: {
    rest: css`
      ${commonNormalStyles}
      border: 1px solid ${theme.colors.brand[700]};
      color: ${theme.colors.brand[700]};
      background-color: ${theme.colors.neutral[0]};
    `,
    hover: css`
      background-color: ${theme.colors.brand[200]};
    `,
    disabled: css`
      border: none;
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[400]};
      cursor: default;
    `,
  },
});

const iconStyles = (theme: DefaultTheme) => ({
  primary: {
    rest: css`
      ${commonNormalStyles}

      color: ${theme.colors.teal[400]};
      background-color: ${theme.colors.neutral[0]};
    `,
    hover: css`
      background-color: ${theme.colors.teal[50]};
    `,
    disabled: css`
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[400]};
      cursor: default;
    `,
  },
  secondary: {
    rest: css`
      ${commonNormalStyles}
      color: ${theme.colors.brand[700]};
      background-color: ${theme.colors.neutral[0]};
    `,
    hover: css`
      background-color: ${theme.colors.brand[200]};
    `,
    disabled: css`
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[400]};
      cursor: default;
    `,
  },
});

const variantStyles = (theme: DefaultTheme) => ({
  normal: normalStyles(theme),
  icon: iconStyles(theme),
});

export const StyledButton = styled.button<CircleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  ${({ size }) => size && sizeStyles[size]};

  ${({ variant = 'normal', color = 'primary', disabled, theme }) => {
    const styles = variantStyles(theme)[variant][color];
    return css`
      ${styles.rest}
      &:hover {
        ${!disabled && styles.hover}
      }

      ${disabled && styles.disabled}
    `;
  }};
`;
