import { Post } from '.contentlayer/generated/types';
import { Categories } from '@/src/entities';

export const filterByCategory = (post: Post[], category: Categories) => {
  return post.filter((post) => post.categories === category);
};
