import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.brand[500]};
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.brand[500]};
  color: ${({ theme }) => theme.colors.neutral[0]};

  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;
