import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 12px 0;
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 4px;
`;

export const TitleContent = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const Description = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[500]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled.span<{ open: boolean }>`
  color: ${({ theme }) => theme.colors.neutral[500]};
  transform: rotate(${({ open }) => (open ? '270deg' : '90deg')});
  transition: transform 0.2s ease-in-out;
  padding: 8px 5px;

  svg {
    fill: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const Content = styled.div`
  padding: 0;
`;
