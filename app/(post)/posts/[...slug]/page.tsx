import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Mdx from '@/src/shared/common-ui/markdown/mdx';
import { createStaticParam, getPost } from '@/src/features/post';

export const generateStaticParams = async () => {
  return createStaticParam(allPosts);
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = getPost(allPosts, params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center textcolor">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'yyyy.MM.dd')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
};

export default PostLayout;

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const joinSlug = params.slug.join('/');
  const post = allPosts.find((post) => post._raw.flattenedPath === joinSlug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};
