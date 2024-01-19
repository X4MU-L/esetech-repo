import React from 'react';

interface Props {
  text: string;
  bg: string;
  height?: string | number;
  py?: string;
  border_gray?: string;
  icon?: string;
  type: 'submit' | 'button' | 'reset';
  isLoading?: boolean;
  isDisabled: boolean;
}
const Button: React.FC<Props> = ({
  text,
  bg,
  height,
  py,
  border_gray,
  icon,
  type,
  isLoading,
  isDisabled = false,
}) => {
  return (
    <div>
      <button
        type={type}
        style={{
          height: `${height ? height : '48px'}`,
          paddingBlock: `${py ? py : '14px'}`,
        }}
        className={` ${
          bg === 'white'
            ? 'bg-btnGray'
            : bg === 'transparent'
            ? 'bg-transparent'
            : 'bg-red-500  font-bold hover:bg-red-600 text-white border-none'
        }
        w-full
        ${
          bg === 'transparent' &&
          !border_gray &&
          'border border-secondary text-secondary'
        }
        ${
          bg === 'transparent' &&
          border_gray &&
          'border border-primary text-secondary'
        }
        ${bg === 'white' && 'text-secondary border-none'}
        px-6 rounded-curve outline-none flex items-center justify-center font-quicksand font-bold text-base leading-5
      `}
        disabled={isLoading || isDisabled}
      >
        {icon ? (
          <div className='flex items-center justify-center'>{icon}</div>
        ) : (
          <span className=''>{text ? text : 'Register'}</span>
        )}
      </button>
    </div>
  );
};

export default Button;
