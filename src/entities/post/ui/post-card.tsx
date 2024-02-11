import { Spacing } from '@/src/shared/common-ui/spacing';
import { dateConverter } from '@/src/shared/util/date-converter';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className=" border-t border-foreground/20 py-48 flex flex-col">
      <div className="">
        <span className=" text-caption-2 leading-caption-2 font-caption-2 text-primary-400 px-8 py-4 bg-primary-100 rounded-md">
          {post.categories}
        </span>
      </div>
      <Spacing className=" mt-12" />
      <h2 className=" text-sub-title-4 font-sub-title-4 leading-sub-title-4 text-foreground/70">
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <Spacing className=" mt-2" />
      <span className=" text-caption-1 font-caption-1 leading-caption-1 text-foreground/50">
        {post.description}
      </span>
      <Spacing className=" mt-16" />
      <time
        dateTime={post.date}
        className=" text-caption-2 leading-caption-2 font-caption-2 text-foreground/30"
      >
        {dateConverter(post.date, 'yyyy.MM.dd')}
      </time>
    </article>
  );
};
