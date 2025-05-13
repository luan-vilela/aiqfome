import styled, { css } from 'styled-components';

const baseIconStyles = css`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const baseRadioButtonInputStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  transition: all 200ms ease-in-out;
`;

const inputCheckedStyles = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.teal[400]};
    border-color: ${theme.colors.teal[400]};
    ${IconContent} {
      display: flex;
    }
  `}
`;

const inputHoverCheckedStyles = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.teal[400]};
    ${IconContent} {
      color: ${theme.colors.teal[50]};
    }
  `}
`;

const inputHoverUncheckedStyles = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.teal[50]};
    ${IconContent} {
      color: ${theme.colors.teal[50]};
    }
  `}
`;

const inputDisabledStyles = css`
  ${({ theme }) => css`
    border-color: ${theme.colors.neutral[400]};
    ${IconContent} {
      color: ${theme.colors.neutral[0]};
    }
  `}
`;

const inputDisabledCheckedStyles = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[400]};
  `}
`;

const labelDisabledStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[500]};
  `}
`;

export const LabelContainer = styled.div<{ disabled?: boolean }>`
  ${({ theme, disabled }) => css`
    font-size: 14px;
    color: ${theme.colors.neutral[500]};

    ${disabled && labelDisabledStyles}
  `}
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContent = styled.div`
  ${({ theme }) => css`
    ${baseIconStyles};
    color: ${theme.colors.neutral[0]};
  `}
`;

export const RadioButtonInput = styled.div`
  ${baseRadioButtonInputStyles}
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  & input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }

  & input:checked ~ ${RadioButtonInput} {
    ${inputCheckedStyles}
  }

  & input:checked ~ ${LabelContainer} {
    font-weight: bold;
  }

  & input:hover:not(:disabled):checked ~ ${RadioButtonInput} {
    ${inputHoverCheckedStyles}
  }

  & input:hover:not(:disabled):not(:checked) ~ ${RadioButtonInput} {
    ${inputHoverUncheckedStyles}
  }

  & input:disabled ~ ${RadioButtonInput} {
    ${inputDisabledStyles}
  }

  & input:disabled:checked ~ ${RadioButtonInput} {
    ${inputDisabledCheckedStyles}
  }
`;
