import styled from 'styled-components';

export const CartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.9rem;

  padding: 0.5rem 0.25rem;
  width: 23rem;

  overflow: hidden;

  background: ${(props) => props.theme['gray-100']};
`;

export const CartCardInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  gap: 1.25rem;
`;

export const CartCardImage = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const CartCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.5rem;
`;

export const CartCardDetailsTitle = styled.span`
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-700']};
  max-width: 10.688rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CartCardDetailsActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  gap: 0.5rem;

  button > svg {
    color: ${(props) => props.theme['purple-500']};
  }

  button > span {
    font-size: 0.75rem;
    line-height: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const CartCardPrice = styled.span`
  font-weight: 700;
  line-height: 1.313rem;
  white-space: nowrap;
`;
