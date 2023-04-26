import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2rem;

  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

export const CounterButton = styled.button`
  border: 0;
  background: inherit;
  box-shadow: 0 0 0 2px transparent !important;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['purple-500']};
  transition: color 0.25s;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
    transition: color 0.25s;
  }
`;
