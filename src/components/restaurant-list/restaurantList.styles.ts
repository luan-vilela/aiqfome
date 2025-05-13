import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 14px;
  text-transform: lowercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand[500]};
  padding: 12px 16px 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
`;

export const SearchWrapper = styled.div`
  background: ${({ theme }) => theme.colors.brand[500]};
  padding: 12px 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  background: ${({ theme }) => theme.colors.neutral[0]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus {
    outline: none;
  }
`;
