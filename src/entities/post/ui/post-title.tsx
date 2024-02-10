import { Post } from 'contentlayer/generated';

interface PostTitleProps {
  post: Post;
}

export const PostTitle = ({ post }: PostTitleProps) => {
  return (
    <h2 className=" text-header-1 font-header-1 leading-header-1">
      {post.title}
    </h2>
  );
};
