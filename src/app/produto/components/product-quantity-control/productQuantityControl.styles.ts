import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  padding: 16px;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 108px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.neutral[500]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: 14px;
  font-weight: bold;
  border: none;

  border-radius: 8px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QuantityText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const Total = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[500]};

  & span {
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-weight: bold;
  }
`;
