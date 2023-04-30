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
`;

export const HomeIntroductionContent = styled.article`
  width: 100%;
  max-width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
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
