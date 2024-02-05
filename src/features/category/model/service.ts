import { Categories } from '@/src/entities/categories';
import { Post } from '@/.contentlayer/generated';

export const filterByCategory = (post: Post[], category: Categories) => {
  return post.filter((post) => post.categories === category);
};
