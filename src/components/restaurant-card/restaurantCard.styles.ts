import Link from 'next/link';
import styled from 'styled-components';

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: 8px;
  overflow: hidden;
`;

export const Logo = styled.img<{ $openTrade: boolean }>`
  width: 64px;
  height: 64px;
  object-fit: cover;
  opacity: ${({ $openTrade }) => ($openTrade ? '1' : '0.5')};
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 11px 12px;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 19px;
  font-size: 14px;
  font-weight: bold;
`;

export const Delivery = styled.span`
  color: ${({ theme }) => theme.colors.brand[500]};
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const FreeDelivery = styled.span`
  color: ${({ theme }) => theme.colors.teal[600]};
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Rating = styled.span`
  color: ${({ theme }) => theme.colors.neutral[500]};
  display: flex;
  align-items: center;
  gap: 2px;
`;
