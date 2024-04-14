import fs from "fs";
import path from "path";

import { Post } from "./post.type";

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

/* 
 getAllPosts의 관심사는 모든 posts를 가져오는 것이지 어떻게 가져오는지가 중요하지는 않습니다.
*/
export const getAllPosts = (): Post[] => readDirectory(postsDirectory);
