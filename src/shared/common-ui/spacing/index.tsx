interface SpacingProps extends React.ComponentPropsWithoutRef<'div'> {}
export const Spacing = ({ ...props }: SpacingProps) => {
  return <div {...props}></div>;
};
