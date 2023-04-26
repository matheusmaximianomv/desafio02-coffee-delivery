import { cloneElement, ReactElement, useState } from 'react';

import { IGroupSelectOptions, GroupSelectContainer, Select } from './styles';

export interface IGroupSelectProps {
  options: IGroupSelectOptions[];
}

type TypeIconProps = ReactElement & { size: number; color: string };

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

  function createElementIcon(icon: ReactElement): ReactElement {
    return cloneElement<TypeIconProps>(icon, { color: '#8047F8', size: 18 });
  }

  function handleSetSelectOption(idTarget: string): void {
    setOptionSelectedId(idTarget);
    options.forEach((option) => (option.selected = option.id === idTarget));
  }

  return (
    <GroupSelectContainer>
      {options.map(({ id, label, icon }) => (
        <Select
          key={id}
          selected={id === optionSelectedId}
          onClick={() => {
            handleSetSelectOption(id);
          }}
        >
          {createElementIcon(icon)}
          {label}
        </Select>
      ))}
    </GroupSelectContainer>
  );
}
