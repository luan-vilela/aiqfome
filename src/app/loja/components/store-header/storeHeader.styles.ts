import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12.5px;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 560px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const HeaderAction = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;

export const InfoAction = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;

  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.teal[400]};

  svg {
    fill: ${({ theme }) => theme.colors.teal[400]};
  }

  @media (min-width: 560px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;
