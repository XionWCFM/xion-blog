import { getAllPosts } from "~/entities/post";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className=" flex justify-center items-center flex-col">
      {posts.map((post) => (
        <div className="" key={post.title}>
          {post.title}
        </div>
      ))}
    </main>
  );
}
