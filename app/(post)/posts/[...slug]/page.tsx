import { redirect } from "next/navigation";

import { MdxRemote, getPost } from "~/entities/post";

const PostPage = ({ params }: { params: { slug: string[] } }) => {
  const filePath = params.slug;
  const post = getPost(filePath);
  if (!post) return redirect("/");

  return <MdxRemote source={post.content} />;
};

export default PostPage;
