import { ChangeEvent, memo } from 'react';

interface Props {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errors?: boolean;
  type: 'text' | 'password' | 'email';
  name: string;
}
const Input: React.FC<Props> = memo(({ value, setValue, type, name }) => {
  return (
    <label className='grid grid-cols-5 items-end gap-3' htmlFor='first_name'>
      <span className='  whitespace-nowrap inline-block capitalize'>
        {name.split('_').join(' ')}
      </span>
      <input
        onChange={setValue}
        value={value}
        className='block w-full col-span-4'
        type={type}
        id={name}
        name={name}
        placeholder={name.split('_').join(' ')}
      />
    </label>
  );
});

export default Input;
