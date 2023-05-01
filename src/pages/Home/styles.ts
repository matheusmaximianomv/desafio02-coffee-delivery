import styled, { DefaultTheme } from 'styled-components';

import backgroundImg from '../../assets/background.svg';

interface IHomeListItemProps {
  variant: keyof DefaultTheme;
}

export const HomeIntroduction = styled.section`
  height: 34rem;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 5.75rem 10rem;

  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;

  @media (max-width: 78.125rem) {
    height: auto;
  }
`;

export const HomeIntroductionContent = styled.article`
  width: 100%;
  max-width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 78.125rem) {
    flex-direction: column;
  }
`;

export const HomePresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem;
  gap: 4.125rem;
`;

export const HomeTitle = styled.div`
  width: 36.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['gray-700']};
    font-stretch: 100;
  }
`;

export const HomeList = styled.ul`
  text-decoration: none;

  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;
`;

export const HomeListItem = styled.li<IHomeListItemProps>`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 2rem;
    height: 2rem;

    background: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
  }

  span {
    font-size: 1rem;
    line-height: 1.313rem;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const HomeImage = styled.img``;

export const HomeCoffeeList = styled.section`
  padding: 2rem 10rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const HomeCoffeeListContent = styled.article`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  gap: 2.125rem;
`;

export const HomeCoffeeListTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.625rem;

  color: ${(props) => props.theme['gray-700']};
`;

export const HomeCoffeeListOptions = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2rem 2.5rem;

  @media (max-width: 82.5rem) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 62.5rem) {
    grid-template-columns: repeat(2, auto);
  }
`;
