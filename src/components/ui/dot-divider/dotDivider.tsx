import styled from 'styled-components';

export const DotDivider = styled.span`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: 12px;
  line-height: 1;
  user-select: none;
  display: inline-block;
  vertical-align: middle;

  &::before {
    content: '•';
  }
`;
