import { useState } from 'react';

import { IGroupSelectOptions, GroupSelectContainer, Select } from './styles';

export interface IGroupSelectProps {
  options: IGroupSelectOptions[];
}

export function GroupSelect({ options }: IGroupSelectProps) {
  const [optionSelectedId, setOptionSelectedId] = useState<string | null>(
    () => {
      const hasOptionSelected = options.find((option) => option.selected);

      if (typeof hasOptionSelected !== 'undefined') {
        return hasOptionSelected.id;
      }

      return null;
    }
  );

  function handleSetSelectOption(idTarget: string): void {
    setOptionSelectedId(idTarget);
    options.forEach((option) => (option.selected = option.id === idTarget));
  }

  return (
    <GroupSelectContainer>
      {options.map(({ id, label, renderIcon }) => (
        <Select
          key={id}
          selected={id === optionSelectedId}
          onClick={() => {
            handleSetSelectOption(id);
          }}
        >
          {renderIcon('#8047F8', 18)}
          {label}
        </Select>
      ))}
    </GroupSelectContainer>
  );
}
