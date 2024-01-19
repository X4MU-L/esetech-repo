import React from 'react';
import SearchIcon from '../svgicons/SearchIcon';

const Input = ({ value, setValue, placeholder, errors, icon, type, name }) => {
  return (
    <div className='w-full h-[42px]'>
      <div
        className={`${errors ? 'border-b-2 border-red-400' : 'border-primary'}
         px-3 flex gap-3 py-4 items-center justify-center h-full border border-primary rounded-curve`}
      >
        <input
          className='flex-1 bg-transparent transition ease-in-out duration-300 w-full delay-150 font-quicksand font-medium text-sm leading-[18px] outline-none border-none placeholder:text-gray'
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={setValue}
        />
        {icon && (
          <div>
            <SearchIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
