import { Post } from 'contentlayer/generated';

interface PostTitleProps {
  post: Post;
}

export const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <div className=" flex flex-col">
      <h2 className=" text-header-1 font-header-1 leading-header-1 whitespace-pre-wrap">
        {post.title}
      </h2>
      <div className=" mt-16"></div>
      <span className=" text-caption-1 font-caption-1 leading-caption-1 whitespace-pre-wrap">
        {post.description}
      </span>
    </div>
  );
};
