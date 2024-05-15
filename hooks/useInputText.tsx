import { useState } from 'react';

export default function useInputText(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (event: any) => setValue(event.target.value);
  return [value, handleValueChange, setValue];
}
