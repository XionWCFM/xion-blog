import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Mdx from '@/src/entities/post/ui/mdx';
import { createStaticParam, getPost } from '@/src/entities/post/model/service';
import { PostWidget } from '@/src/widget/post-widget';

export const generateStaticParams = async () => {
  return createStaticParam(allPosts);
};

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const post = getPost(allPosts, params.slug);
  if (!post) notFound();

  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <PostWidget post={post} />

      <article className=" w-full md:w-[768px] flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-col">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </div>
  );
};

export default PostPage;

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
