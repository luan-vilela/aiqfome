import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.brand[500]};
  align-items: center;
  justify-content: space-around;
  padding: 20px 16px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: white;
  opacity: 0.8;
`;

export const AddressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

export const AddressText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Arrow = styled.span`
  font-size: 16px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
