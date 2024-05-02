export type Post = {
  content: string;
  filePath: string[];
};

export const CategiriesList = ["react", "typescript", "next", "css", "yarnberry"];

export type Categories = (typeof CategiriesList)[number];

export interface Frontmatter {
  title: string;
  date: ISODate;
  description: string;
  categories: Categories[];
  releaseDate: ISODate;
  writer: string;
}
