interface SeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Separator = ({ ...props }: SeparatorProps) => {
  return <div {...props}></div>;
};
