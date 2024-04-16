export type Post = {
  content: string;
  filePath: string[];
};

export type Categories = "react" | "typescript" | "next" | "css" | "yarnberry";

export const CategiriesList: Categories[] = ["react", "typescript", "next", "css", "yarnberry"];

export interface Frontmatter {
  title: string;
  date: ISODate;
  description: string;
  categories: Categories[];
  releaseDate: ISODate;
  writer: string;
}
