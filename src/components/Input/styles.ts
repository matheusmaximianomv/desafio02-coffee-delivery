import styled from 'styled-components';

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

export const InputContainer = styled.input`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  min-width: 27.125rem;
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
