import styled from 'styled-components';

import {
  TypeSizeOptionsButton,
  TypePaddingOptionsButton,
  TypeColorsOptionsButton,
  IButtonProps,
} from './interfaces';

const sizeOptionsButton: TypeSizeOptionsButton = {
  sm: {
    height: '2.375rem',
    minWidth: '2.375rem',
  },
  md: {
    height: '2rem',
    minWidth: '5.688rem',
  },
  lg: {
    height: '2.875rem',
    minWidth: '8.25rem',
  },
};

const paddingOptionsButton: TypePaddingOptionsButton = {
  sm: '0.5rem',
  md: '0rem 0.5rem',
  lg: '0.75rem 0.5rem',
};

const colorsOptionsButton: TypeColorsOptionsButton = {
  primary: {
    background: 'yellow-500',
    backgroundHover: 'yellow-700',
    color: 'white',
  },
  secondary: {
    background: 'purple-700',
    backgroundHover: 'purple-500',
    color: 'white',
  },
  default: {
    background: 'gray-300',
    backgroundHover: 'gray-400',
    color: 'gray-700',
  },
  simple: {
    background: 'yellow-300',
    backgroundHover: 'yellow-500',
    color: 'yellow-700',
  },
};

export const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 6px;
  border: 0;
  position: relative;

  height: ${(props) => sizeOptionsButton[props.size].height};
  min-width: ${(props) => sizeOptionsButton[props.size].minWidth};

  padding: ${(props) => paddingOptionsButton[props.size]};

  background-color: ${(props) =>
    props.theme[colorsOptionsButton[props.variant].background]};

  font-weight: ${(props) => (props.variant === 'default' ? '400' : '700')};
  font-size: 0.875rem;
  color: ${(props) => props.theme[colorsOptionsButton[props.variant].color]};

  transition: background-color 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.theme[colorsOptionsButton[props.variant].backgroundHover]};
    transition: background-color 0.25s;
  }
`;

export const ButtonBadge = styled.span`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: -0.522rem;
  top: -0.5rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-700']};

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;
`;
