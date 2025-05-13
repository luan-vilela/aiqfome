import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 8px;
`;

export const StoreTitleArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const StoreTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const ItemCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
`;

export const ItemTitle = styled.span`
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.brand[500]};
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;

export const OptionLabel = styled.span`
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const OptionValue = styled.span`
  color: ${({ theme }) => theme.colors.neutral[700]};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AdditionalPrice = styled.span`
  color: ${({ theme }) => theme.colors.brand[500]};
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

export const SubtotalArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubtotalLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const SubtotalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand[700]};
`;

export const PayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand[500]};
  color: white;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const EmptyState = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  padding: 24px;
`;
