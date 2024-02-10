import React from 'react';

interface ReactiveContainerProps extends React.PropsWithChildren {}

const ReactiveContainer = ({ children }: ReactiveContainerProps) => {
  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <article className=" w-full  flex justify-center items-center flex-col">
        {children}
      </article>
    </div>
  );
};

export default ReactiveContainer;
