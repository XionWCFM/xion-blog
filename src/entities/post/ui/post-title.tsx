import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

interface PostTitleProps {
  post: Post;
}

export const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className=" flex flex-col  w-full">
      <div className=" border-t-[6px] border-foreground"></div>
      <div className=" mt-16"></div>
      <span className="">{post.categories}</span>
      <div className=" mt-16"></div>
      <h1 className=" text-header-1 font-header-1 leading-header-1 text-foreground/90">
        {post.title}
      </h1>
      <div className=" mt-24"></div>
      <span className=" text-body-3 font-body-3 leading-body-3 text-foreground/60">
        {post.description}
      </span>
      <div className=" mt-8"></div>
      <div className=" text-foreground/50 flex text-caption-2 font-caption-2 leading-caption-2">
        <span className=" mr-16">{post.writer}</span>
        <div className=" mr-24 border-l border-foreground"></div>
        <span>{format(parseISO(post.date), 'yyyy.MM.dd')}</span>
      </div>
    </div>
  );
};
