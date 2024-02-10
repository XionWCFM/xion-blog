import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Mdx from '@/src/features/mdx/ui/mdx';
import { createStaticParam, getPost } from '@/src/entities/post/model/service';
import { PostTitle } from '@/src/entities/post';
import { Spacing } from '@/src/shared/common-ui/spacing';
import ReactiveContainer from '@/src/shared/common-ui/reactive-container';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
  return createStaticParam(allPosts);
};

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const post = getPost(allPosts, params.slug);
  if (!post) notFound();

  return (
    <ReactiveContainer>
      <PostTitle post={post} />
      <Spacing className=" mt-48" />
      <div className=" flex flex-col">
        <Mdx code={post.body.code} />
      </div>
    </ReactiveContainer>
  );
};

export default PostPage;

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  const joinSlug = params.slug.join('/');
  const post = allPosts.find((post) => post._raw.flattenedPath === joinSlug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title, description: post.body.code };
};
