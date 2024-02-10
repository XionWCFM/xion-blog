import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

interface PostTitleDescriptionProps {
  post: Post;
}
export const PostTitleDescription = ({ post }: PostTitleDescriptionProps) => {
  return (
    <div>
      <time>{format(parseISO(post.date), 'yyyy.MM.dd')}</time>
      <span>{post.categories}</span>
      <span>{post.description}</span>
    </div>
  );
};
