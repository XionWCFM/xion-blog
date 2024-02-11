'use client';
import * as Avatar from '@radix-ui/react-avatar';
import { VariantProps, cva } from 'class-variance-authority';

const avatarVariants = cva(``, {
  variants: {
    size: {
      '16': ' h-16 w-16',
      '32': ' h-32 w-32',
      '48': ' h-48 w-48',
    },
  },
  defaultVariants: {
    size: '16',
  },
});

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
}

export const XionAvatar = ({ src, size }: AvatarProps) => {
  return (
    <Avatar.Root className={avatarVariants({ size })}>
      <Avatar.Image
        className=" h-full w-full rounded-full object-cover"
        src={src}
      />
      <Avatar.Fallback
        className={`${avatarVariants({
          size,
        })} rounded-full bg-foreground/10 flex`}
        delayMs={600}
      ></Avatar.Fallback>
    </Avatar.Root>
  );
};
