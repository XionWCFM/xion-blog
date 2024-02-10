import { allPosts, Post } from 'contentlayer/generated';
import { PostCard, getAllPost } from '@/src/entities/post';
import { Input } from '@/src/shared/common-ui/input';
import { Spacing } from '@/src/shared/common-ui/spacing';

export default function Home() {
  const posts = getAllPost(allPosts);

  return (
    <main className="">
      <form className=" w-full">
        <Input className=" w-full" />
      </form>
      <Spacing className=" mt-64" />
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </main>
  );
}
