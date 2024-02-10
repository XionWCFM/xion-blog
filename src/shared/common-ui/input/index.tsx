import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}
export const Input = React.forwardRef(
  (
    { className, ...attributes }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        {...attributes}
        ref={ref}
        className={` focus:outline-none px-32 py-12 bg-gray-100 rounded-full placeholder:text-gray-300 text-gray-500 dark:bg-neutral-900 ${className}`}
      />
    );
  },
);

Input.displayName = 'Input';
