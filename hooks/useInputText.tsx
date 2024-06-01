import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type UseInputTextReturnType = [
  string,
  (event: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<string>>,
];

export default function useInputText(
  defaultValue: string,
): UseInputTextReturnType {
  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return [value, handleValueChange, setValue];
}
