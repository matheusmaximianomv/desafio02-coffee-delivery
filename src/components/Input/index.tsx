import { useState, forwardRef, Ref } from 'react';

import {
  LabelContainer,
  InputContainer,
  TagOptional,
  IInputProps,
} from './styles';

const Input = forwardRef(function Input(
  { optional, ...props }: IInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  const [inputValue, setInputValue] = useState<string | number | null>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const showOptionalInformation = !!optional && !inputValue && !hasFocus;

  return (
    <LabelContainer>
      <InputContainer
        {...props}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onFocus={(_) => {
          setHasFocus(true);
        }}
        onBlur={(_) => {
          setHasFocus(false);
        }}
        ref={ref}
      />
      {showOptionalInformation && <TagOptional>Opcional</TagOptional>}
    </LabelContainer>
  );
});

export { Input };
