import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { CATEGORIES } from './src/entities/categories/model/model';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    writer: {
      type: 'string',
      required: true,
    },
    description: { type: 'string', required: true },
    categories: {
      type: 'enum',
      options: CATEGORIES,
      required: true,
    },
    published: { type: 'boolean', required: true, default: true },
    releaseDate: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      [
        //@ts-expect-error
        rehypePrettyCode,
        {
          theme: 'github-dark',
          //@ts-expect-error
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          //@ts-expect-error
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          //@ts-expect-error
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
    ],
  },
});
