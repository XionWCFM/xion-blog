'use client';

import React from 'react';
import { copyTextToClipboard } from '../lib/copy-clipboard';

interface PreProps
  extends React.HTMLAttributes<HTMLPreElement>,
    React.PropsWithChildren {}

export const Pre = ({ children, ...props }: PreProps) => {
  const textInput = React.useRef<HTMLDivElement>(null);
  const copy = async () => {
    copyTextToClipboard(textInput.current?.textContent as string);
  };
  return (
    <pre className="w-full px-32 py-16 rounded-sm" {...props}>
      <button
        onClick={() => copy()}
        className=" absolute right-0 top-0 bg-primary-500 text-white px-8 py-4 text-caption-2 font-caption-2 "
      >
        code copy
      </button>
      <div ref={textInput}>{children}</div>
    </pre>
  );
};
