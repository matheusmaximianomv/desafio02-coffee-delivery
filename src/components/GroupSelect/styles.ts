import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

export interface IGroupSelectOptions {
  id: string;
  label: string;
  icon: ReactElement;
  selected: boolean;
}

type TypeSelectProps = Pick<IGroupSelectOptions, 'selected'>;

export const GroupSelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem;
  gap: 0.75rem;
`;

export const Select = styled.button<TypeSelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.167rem;
  height: 3.188rem;

  background: ${(props) =>
    props.selected ? props.theme['purple-300'] : props.theme['gray-300']};
  border-radius: 6px;
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme['purple-500']}` : 'none'};

  font-size: 0.75rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-600']};

  cursor: pointer;

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-700']};
      }
    `}
`;
