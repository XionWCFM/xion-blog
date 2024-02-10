import * as Avatar from '@radix-ui/react-avatar';

interface AvatarProps {
  src: string;
  size?: '16' | '32' | '48';
}

export const XionAvatar = ({ src, size = '16' }: AvatarProps) => {
  return (
    <Avatar.Root className={` h-${size} w-${size} `}>
      <Avatar.Image
        className=" h-full w-full rounded-full object-cover"
        src={src}
      />
      <Avatar.Fallback
        className={`h-${size} w-${size} rounded-full bg-foreground/10 flex`}
        delayMs={600}
      ></Avatar.Fallback>
    </Avatar.Root>
  );
};
