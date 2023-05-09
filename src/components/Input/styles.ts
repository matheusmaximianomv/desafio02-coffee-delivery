import { InputHTMLAttributes, Ref } from 'react';
import styled from 'styled-components';

export type TypeSizesInput =
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | 'full'
  | 'default';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: TypeSizesInput;
  ref: Ref<HTMLInputElement> | null;
  optional?: boolean;
}

const sizeInRem: Record<TypeSizesInput, string> = {
  xl: '35rem',
  lg: '21.75rem',
  md: '17.25rem',
  sm: '12.5rem',
  xs: '3.75rem',
  default: '27.125rem',
  full: '100%',
};

export const LabelContainer = styled.label`
  position: relative;
  display: inline-block;
`;

export const TagOptional = styled.span`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  font-style: italic;
  font-size: 0.75rem;
  line-height: 0.975rem;

  color: ${(props) => props.theme['gray-500']};
`;

export const InputContainer = styled.input<IInputProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  width: ${(props) =>
    props.width ? sizeInRem[props.width] : sizeInRem.default};
  height: 2.625rem;

  padding: 0.75rem;
  background: ${(props) => props.theme['gray-200']};

  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.138rem;
  color: ${(props) => props.theme['gray-600']};
  caret-color: ${(props) => props.theme['gray-500']};

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;
