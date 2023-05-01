import styled, { DefaultTheme } from 'styled-components';

interface IOrderCardTitleProps {
  variant: keyof DefaultTheme;
}

export const OrderContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2.5rem;

  display: flex;
  gap: 2rem;
  justify-content: flex-start;
`;

export const OrderColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`;

export const OrderTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.438rem;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};
`;

export const OrderCardContainer = styled.article`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
`;

export const OrderCardTitle = styled.div<IOrderCardTitleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 1.313rem;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['gray-600']};
  }

  svg {
    color: ${(props) => props.theme[props.variant]};
  }
`;

export const OrderCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const OrderFieldGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;