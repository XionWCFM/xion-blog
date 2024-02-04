// import { format, parseISO } from 'date-fns';
// import { allPosts } from 'contentlayer/generated';
// import { notFound } from 'next/navigation';
// import Mdx from '@/src/shared/common-ui/markdown/mdx';

import { Post } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';

// export const generateStaticParams = async () => {
//   const result = allPosts.map((post) => ({
//     slug: post._raw.flattenedPath.split('/'),
//   }));
//   return result;
// };

// const PostLayout = ({ params }: { params: { slug: string[] } }) => {
//   const joinSlug = params.slug.join('/');
//   const post = allPosts.find((post) => post._raw.flattenedPath === joinSlug);
//   if (!post) notFound();

//   return (
//     <article className="mx-auto max-w-xl py-8">
//       <div className="mb-8 text-center textcolor">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1 className="text-3xl font-bold">{post.title}</h1>
//         <Mdx code={post.body.code} />
//       </div>
//     </article>
//   );
// };

// export default PostLayout;

// export const generateMetadata = ({
//   params,
// }: {
//   params: { slug: string[] };
// }) => {
//   const joinSlug = params.slug.join('/');
//   const post = allPosts.find((post) => post._raw.flattenedPath === joinSlug);
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
//   return { title: post.title };
// };

const createStaticParam = (posts: Post[]) => {
  const result = posts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }));
  return result;
};

const postFindByPath = (posts: Post[], slug: string[]) => {
  const joinSlug = slug.join('/');
  const post = posts.find((post) => post._raw.flattenedPath === joinSlug);
  if (!post) return null;
  return post;
};

const sortByDate = (posts: Post[]) => {
  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};
const filteredByPublish = (posts: Post[]) => {
  return posts.filter((post) => post.published);
};

const getPost = (posts: Post[], slug: string[]) => {
  const filterByPublishPost = filteredByPublish(posts);
  const post = postFindByPath(filterByPublishPost, slug);
  return post;
};

export const postHelper = {
  createStaticParam,
  postFindByPath,
  sortByDate,
  filteredByPublish,
  getPost,
};
