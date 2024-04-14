import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

import { Frontmatter, Post } from "./post.type";

const postsDirectory = path.join(process.cwd(), "posts");

const readDirectory = (directory: string): Post[] => {
  return fs.readdirSync(directory, { withFileTypes: true }).reduce<Post[]>((posts, file) => {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      return posts.concat(readDirectory(fullPath));
    }
    if (file.isFile() && path.extname(file.name) === ".mdx") {
      const content = fs.readFileSync(fullPath, "utf8");
      const filePath = fullPath
        .replace(postsDirectory, "")
        .replace(/^\/+/, "")
        .replace(/\.mdx$/, "")
        .split("/");
      posts.push({ content, filePath });
    }
    return posts;
  }, []);
};

const findPostFile = (directory: string, filePath: string[]): Post | null => {
  const fullPath = path.join(directory, ...filePath);
  const fileExtensions = [".md", ".mdx"];
  for (const ext of fileExtensions) {
    const fullFilePath = `${fullPath}${ext}`;
    if (fs.existsSync(fullFilePath)) {
      const content = fs.readFileSync(fullFilePath, "utf8");
      return { content, filePath };
    }
  }
  return null;
};

export const getPost = (filePath: string[]): Post | null => {
  return findPostFile(postsDirectory, filePath);
};

export const getFrontmatter = async (source: string): Promise<Frontmatter> => {
  const { frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true }
  });
  return frontmatter;
};

/* 
 getAllPosts의 관심사는 모든 posts를 가져오는 것이지 어떻게 가져오는지가 중요하지는 않습니다.
*/
export const getAllPosts = (): Post[] => readDirectory(postsDirectory);
