import fs from "fs";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";

const markdownsource = `
 # hello world
**hel**    

`;

export default async function RemoteMdxPage() {
  const filePath = path.join(process.cwd(), "posts", "post-01.mdx");
  const markdownsource = fs.readFileSync(filePath, "utf8");
  const source = await serialize(markdownsource);

  const { content, frontmatter } = await compileMDX({
    source: markdownsource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkBreaks],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section"
              }
            }
          ],
          [
            //@ts-expect-error
            rehypePrettyCode,
            {
              theme: "github-dark",
              //@ts-expect-error
              onVisitLine(node) {
                if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }];
                }
              },
              //@ts-expect-error
              onVisitHighlightedLine(node) {
                node.properties.className.push("line--highlighted");
              },
              //@ts-expect-error
              onVisitHighlightedWord(node) {
                node.properties.className = ["word--highlighted"];
              }
            }
          ]
        ]
      }
    }
  });
  console.log(frontmatter);
  console.log(content);
  return (
    <div className=" prose dark:prose-dark">
      <MDXRemote
        source={markdownsource}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkBreaks],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "Link to section"
                  }
                }
              ],
              [
                //@ts-expect-error
                rehypePrettyCode,
                {
                  theme: "github-dark",
                  //@ts-expect-error
                  onVisitLine(node) {
                    if (node.children.length === 0) {
                      node.children = [{ type: "text", value: " " }];
                    }
                  },
                  //@ts-expect-error
                  onVisitHighlightedLine(node) {
                    node.properties.className.push("line--highlighted");
                  },
                  //@ts-expect-error
                  onVisitHighlightedWord(node) {
                    node.properties.className = ["word--highlighted"];
                  }
                }
              ]
            ]
          }
        }}
      />
    </div>
  );
}
