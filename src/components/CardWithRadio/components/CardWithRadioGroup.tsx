import React, { useState } from 'react';
import { CardWithRadio } from '../CardWithRadio';
import { RadioCardGroupProps } from '../types';

export const CardWithRadioGroup: React.FC<RadioCardGroupProps> = ({ options, defaultSelectedId, onChange }) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const handleChange = (newSelectedId: string) => {
    setSelectedId(newSelectedId); // Update local state
    if (onChange) {
      onChange(newSelectedId);
    }
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <CardWithRadio
          key={option.id}
          title={option.title}
          description={option.description}
          selected={selectedId === option.id}
          onClick={() => handleChange(option.id)}
        />
      ))}
    </div>
  );
};
