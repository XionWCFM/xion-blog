import React from 'react';
import { cn } from '../../util/cn';

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
        className={cn(
          ` focus:outline-none pl-8 bg-gray-100 rounded-md placeholder:text-gray-300 text-gray-500 dark:bg-gray-200`,
          className,
        )}
      />
    );
  },
);

Input.displayName = 'Input';
