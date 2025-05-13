import styled from 'styled-components';

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 0;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 600;
  width: 20px;
  text-align: center;
`;

export const Label = styled.span`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Price = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brand[700]};
  font-weight: 600;
`;
