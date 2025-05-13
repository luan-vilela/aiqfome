'use client';

import { useCallback, useState } from 'react';

type UseMultiSelectLimitProps<T> = {
  min?: number;
  max: number;
  initialSelected?: T[];
};

export function useMultiSelectLimit<T extends string>({
  min = 0,
  max,
  initialSelected = [],
}: UseMultiSelectLimitProps<T>) {
  const [selected, setSelected] = useState<T[]>(initialSelected);

  const isSelected = useCallback((value: T) => selected.includes(value), [selected]);

  const toggle = useCallback(
    (value: T) => {
      const alreadySelected = selected.includes(value);

      if (alreadySelected) {
        setSelected((prev) => prev.filter((v) => v !== value));
      } else {
        if (selected.length < max) {
          setSelected((prev) => [...prev, value]);
        }
      }
    },
    [selected, max]
  );

  const isDisabled = useCallback(
    (value: T) => !selected.includes(value) && selected.length >= max,
    [selected, max]
  );

  const isValid = selected.length >= min;

  return {
    selected,
    isSelected,
    toggle,
    isDisabled,
    isValid,
  };
}
