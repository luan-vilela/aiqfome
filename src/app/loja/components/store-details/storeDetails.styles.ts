import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const BoxFee = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Fee = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand[500]};
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;
