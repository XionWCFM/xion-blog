import { Spacing } from '@/src/shared/common-ui/spacing';
import { Post } from 'contentlayer/generated';
import { ASSET } from '@/src/shared/constant/internal/asset';
import { XionAvatar } from '@/src/shared/common-ui/avatar';
import { dateConverter } from '@/src/shared/util/date-converter';
import { Separator } from '@/src/shared/common-ui/separator';

interface PostTitleProps {
  post: Post;
}

export const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className=" flex flex-col w-full">
      <Separator className=" border-t-[4px] border-foreground" />
      <Spacing className=" mt-16" />
      <span className=" text-caption-1 font-caption-1 leading-caption-1 text-foreground/40">
        {post.categories}
      </span>
      <Spacing className=" mt-16" />
      <h1 className=" text-header-1 font-header-1 leading-header-1 text-foreground/90">
        {post.title}
      </h1>
      <Spacing className=" mt-24" />
      <span className=" text-body-4 font-body-4 leading-body-4 text-foreground/60">
        {post.description}
      </span>
      <Spacing className=" mt-12" />
      <div className=" text-foreground/50 flex items-center text-caption-2 font-caption-2 leading-caption-2">
        <XionAvatar src={ASSET.avatar.src} />
        <span className=" ml-4 mr-16">{post.writer}</span>
        <span>{dateConverter(post.date)}</span>
      </div>
      <Spacing className=" mt-16" />
      <Separator className=" border-t-[1px] border-foreground/30" />
    </div>
  );
};
