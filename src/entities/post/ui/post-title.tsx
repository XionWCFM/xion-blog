import { Spacing } from '@/src/shared/common-ui/spacing';
import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

interface PostTitleProps {
  post: Post;
}

export const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" border-t-[4px] border-foreground"></div>
      <Spacing className=" mt-16" />
      <span className=" text-caption-1 font-caption-1 leading-caption-1 text-foreground/40">
        {post.categories}
      </span>
      <Spacing className=" mt-16" />
      <h1 className=" text-header-1 font-header-1 leading-header-1 text-foreground/90">
        {post.title}
      </h1>
      <Spacing className=" mt-24" />
      <span className=" text-body-3 font-body-3 leading-body-3 text-foreground/60">
        {post.description}
      </span>
      <Spacing className=" mt-8" />
      <div className=" text-foreground/50 flex text-caption-2 font-caption-2 leading-caption-2">
        <span className=" mr-16">{post.writer}</span>
        <div className=" mr-24 border-l border-foreground"></div>
        <span>{format(parseISO(post.date), 'yyyy.MM.dd')}</span>
      </div>
      <Spacing className=" mt-16" />
      <div className=" border-t-[1px] border-foreground/30"></div>
    </div>
  );
};
