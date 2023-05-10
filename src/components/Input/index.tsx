import {
  useState,
  forwardRef,
  Ref,
  ChangeEventHandler,
  FocusEventHandler,
  ChangeEvent,
  FocusEvent,
} from 'react';

import {
  LabelContainer,
  InputContainer,
  TagOptional,
  IInputProps,
} from './styles';

type TypeEventsInput = ChangeEvent<HTMLInputElement> &
  FocusEvent<HTMLInputElement, Element>;

type TypeEventsDispatcherInput =
  | ChangeEventHandler<HTMLInputElement>
  | FocusEventHandler<HTMLInputElement>;

const Input = forwardRef(function Input(
  { optional, ...props }: IInputProps,
  ref: Ref<HTMLInputElement> | null
) {
  const [inputValue, setInputValue] = useState<string | number | null>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const showOptionalInformation = !!optional && !inputValue && !hasFocus;

  function handleEvent(
    event: TypeEventsInput,
    eventDispatcher?: TypeEventsDispatcherInput
  ) {
    if (eventDispatcher) {
      eventDispatcher(event);
    }
  }

  return (
    <LabelContainer>
      <InputContainer
        {...props}
        onChange={(event) => {
          setInputValue(event.target.value);
          handleEvent(event as TypeEventsInput, props.onChange);
        }}
        onBlur={(event) => {
          setHasFocus(false);
          handleEvent(event, props.onBlur);
        }}
        onFocus={(_) => {
          setHasFocus(true);
        }}
        ref={ref}
      />
      {showOptionalInformation && <TagOptional>Opcional</TagOptional>}
    </LabelContainer>
  );
});

export { Input };
