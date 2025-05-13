import styled, { css } from 'styled-components';

const baseIconStyles = css`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const baseCheckboxInputStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  border-radius: 3px;
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

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContent = styled.div`
  ${({ theme }) => css`
    ${baseIconStyles};
    color: ${theme.colors.neutral[0]};
  `}
`;

export const CheckboxInput = styled.div`
  ${baseCheckboxInputStyles}
`;

export const CheckboxLabel = styled.label`
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

  & input:checked ~ ${CheckboxInput} {
    ${inputCheckedStyles}
  }

  & input:checked ~ ${LabelContainer} {
    font-weight: bold;
  }

  & input:hover:not(:disabled):checked ~ ${CheckboxInput} {
    ${inputHoverCheckedStyles}
  }

  & input:hover:not(:disabled):not(:checked) ~ ${CheckboxInput} {
    ${inputHoverUncheckedStyles}
  }

  & input:disabled ~ ${CheckboxInput} {
    ${inputDisabledStyles}
  }

  & input:disabled:checked ~ ${CheckboxInput} {
    ${inputDisabledCheckedStyles}
  }
`;
