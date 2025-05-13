'use client';

import { useState } from 'react';

export function useSingleSelect<T>(initial?: T) {
  const [selected, setSelected] = useState<T | undefined>(initial);

  const select = (value: T) => {
    setSelected(value);
  };

  const isSelected = (value: T) => selected === value;

  return {
    selected,
    isSelected,
    select,
  };
}
