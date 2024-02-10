import { allPosts, Post } from 'contentlayer/generated';
import { PostCard, getAllPost } from '@/src/entities/post';
import { Input } from '@/src/shared/common-ui/input';

export default function Home() {
  const posts = getAllPost(allPosts);

  return (
    <main className="">
      <form action="">
        <Input className=" w-full" />
      </form>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </main>
  );
}
