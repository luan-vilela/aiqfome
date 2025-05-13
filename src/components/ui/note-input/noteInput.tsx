'use client';

import * as S from './noteInput.styles';

interface NoteInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function NoteInput({ value, onChange, placeholder }: NoteInputProps) {
  return (
    <S.Textarea
      placeholder={
        placeholder || 'alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato'
      }
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
    />
  );
}
