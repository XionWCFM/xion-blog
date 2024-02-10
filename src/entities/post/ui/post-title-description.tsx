import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

interface PostTitleDescriptionProps {
  post: Post;
}
export const PostTitleDescription = ({ post }: PostTitleDescriptionProps) => {
  return (
    <div className=" flex justify-between items-center">
      <time className=" text-caption-2 font-caption-2 leading-caption-2">
        {format(parseISO(post.date), 'yyyy.MM.dd')}
      </time>
      <span className=" text-caption-2 font-caption-2 leading-caption-2">
        {post.categories}
      </span>
    </div>
  );
};
