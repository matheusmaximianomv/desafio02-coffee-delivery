import { useState } from 'react';

import {
  LabelContainer,
  InputContainer,
  TagOptional,
  IInputProps,
} from './styles';

export function Input({ optional, ...props }: IInputProps) {
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
      />
      {showOptionalInformation && <TagOptional>Opcional</TagOptional>}
    </LabelContainer>
  );
}
