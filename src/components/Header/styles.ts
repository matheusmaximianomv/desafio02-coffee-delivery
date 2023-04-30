import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 2rem 10rem;
`;

export const HeaderContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 70rem;
`;

export const HeaderLogo = styled.img`
  width: 5.309rem;
  height: 2.5rem;
`;

export const HeaderActions = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const HeaderLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  min-width: 8.938rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-300']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.138rem;
    color: ${(props) => props.theme['purple-700']};
  }
`;
