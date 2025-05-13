import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.neutral[0]};
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 195px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Price = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brand[500]};
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.neutral[500]};
    margin-right: 8px;
  }

  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.brand[500]};
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;
