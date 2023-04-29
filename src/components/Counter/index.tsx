import { useState } from 'react';
import { Minus, Plus } from 'phosphor-react';

import { CounterContainer, CounterButton } from './styles';

export interface ICounterProps {
  value: number;
  min?: number;
  onChange: (currentValue: number) => void;
}

const MIN_VALUE = 0;

export function Counter({
  value = MIN_VALUE,
  min = MIN_VALUE,
  onChange,
}: ICounterProps) {
  const [counterValue, setCounterValue] = useState<number>(value);

  function handleDecreaseValue(): void {
    setCounterValue((state) => {
      const newState = state === min ? state : --state;

      onChange(newState);

      return newState;
    });
  }

  function handleIncreaseValue(): void {
    setCounterValue((state) => {
      const newState = ++state;

      onChange(newState);

      return newState;
    });
  }

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecreaseValue}>
        <Minus />
      </CounterButton>

      <span>{counterValue}</span>

      <CounterButton onClick={handleIncreaseValue}>
        <Plus />
      </CounterButton>
    </CounterContainer>
  );
}
