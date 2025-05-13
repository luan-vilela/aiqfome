import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionItem = styled(Link)`
  text-decoration: none;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const TagIcon = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.teal[400]};
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[500]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Promo = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const OldPrice = styled(Promo)`
  text-decoration: line-through;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand[500]};
`;
