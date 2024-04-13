import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://xionhub-xionwcfm.vercel.app";
  // const posts = await getAllPost(allPosts);
  // const postUrls = posts.map((post) => ({
  //   url: `${baseUrl}${post.url}`,
  //   lastModified: post.date
  // }));
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    }
    // ...postUrls
  ];
}
