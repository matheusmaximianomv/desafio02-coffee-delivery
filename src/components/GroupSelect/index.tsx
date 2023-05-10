import { useState } from 'react';

import { IGroupSelectOptions, GroupSelectContainer, Select } from './styles';

export interface IGroupSelectEvent {
  id: string;
  label: string;
}

export interface IGroupSelectProps {
  options: IGroupSelectOptions[];
  onChangeOption: (event: IGroupSelectEvent) => void;
}

export function GroupSelect({ options, onChangeOption }: IGroupSelectProps) {
  const [optionSelectedId, setOptionSelectedId] = useState<string | null>(
    () => {
      const hasOptionSelected = options.find((option) => option.selected);

      if (typeof hasOptionSelected !== 'undefined') {
        return hasOptionSelected.id;
      }

      return null;
    }
  );

  function setSelectOption(id: string, label: string): void {
    setOptionSelectedId(id);
    options.forEach((option) => (option.selected = option.id === id));
    onChangeOption({
      id,
      label,
    });
  }

  return (
    <GroupSelectContainer>
      {options.map(({ id, label, renderIcon }) => (
        <Select
          key={id}
          selected={id === optionSelectedId}
          onClick={() => {
            setSelectOption(id, label);
          }}
        >
          {renderIcon('#8047F8', 18)}
          {label}
        </Select>
      ))}
    </GroupSelectContainer>
  );
}
