import styled from 'styled-components';

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  gap: 4px;
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand[500]};
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const DiscountPrice = styled(Price)`
  color: ${({ theme }) => theme.colors.other.success};
`;
