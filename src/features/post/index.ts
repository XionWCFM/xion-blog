import { Post } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';

export const createStaticParam = (posts: Post[]) => {
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

export const getPost = (posts: Post[], slug: string[]) => {
  const filterByPublishPost = filteredByPublish(posts);
  const post = postFindByPath(filterByPublishPost, slug);
  return post;
};

export const getAllPost = (posts: Post[]) => {
  return sortByDate(posts);
};
