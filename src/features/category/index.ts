import { Categories } from '@/src/entities/categories';
import { Post } from '@/.contentlayer/generated';

export const categoryHelper = {
  filterByCategory: (post: Post[], category: Categories) => {
    post.filter((post) => post.categories === category);
  },
};
