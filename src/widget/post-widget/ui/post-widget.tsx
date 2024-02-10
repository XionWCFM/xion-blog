import { PostTitle, PostTitleDescription } from '@/src/entities/post';
import { Post } from 'contentlayer/generated';

interface PostWidgetProps {
  post: Post;
}

export const PostWidget = ({ post }: PostWidgetProps) => {
  return (
    <div className=" flex flex-col">
      <PostTitle post={post} />
      <div className=" mt-48"></div>
      <PostTitleDescription post={post} />
    </div>
  );
};
