import { Metadata } from "next";
import { redirect } from "next/navigation";

import { MdxRemote, getAllPosts, getPost } from "~/entities/post";

interface PostProps {
  params: {
    slug: string[];
  };
}

const PostPage = async ({ params }: PostProps) => {
  const filePath = params.slug;
  const post = await getPost(filePath);
  if (!post) return redirect("/");
  return (
    <main className=" flex flex-col justify-center items-center w-full  ">
      <h1>ds</h1>
      <MdxRemote source={post.content} />
    </main>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  return (await getAllPosts()).map((post) => ({
    slug: post.filePath
  }));
};

export const generateMetadata = async ({
  params
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  const filePath = params.slug;
  const post = await getPost(filePath);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title, description: post.description };
};
