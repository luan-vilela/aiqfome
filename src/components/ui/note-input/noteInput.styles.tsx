import styled from 'styled-components';

export const Textarea = styled.textarea`
  height: 64px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 8px;
  padding: 10px 12px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  resize: none;
  background-color: ${({ theme }) => theme.colors.neutral[0]};

  &::placeholder {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[500]};
    white-space: pre-line;
  }
`;
