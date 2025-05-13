import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin: 4px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
