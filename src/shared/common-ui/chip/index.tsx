export const Chip = ({ children }: React.PropsWithChildren) => {
  return (
    <span className="text-caption-2 leading-caption-2 font-caption-2 text-primary-400 px-8 py-4 bg-primary-100 rounded-md">
      {children}
    </span>
  );
};
