import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import * as React from 'react';

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={
        ' text-header-1 font-header-1 leading-header-1 text-foreground/90 '
      }
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={
        ' text-header-2 font-header-2 leading-header-2 text-foreground/90'
      }
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={
        ' text-header-3 font-header-3 leading-header-3 text-foreground/90'
      }
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={
        ' text-header-3 font-header-3 leading-header-3 text-foreground/90'
      }
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={
        ' text-header-3 font-header-3 leading-header-3 text-foreground/90'
      }
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={
        ' text-header-3 font-header-3 leading-header-3 text-foreground/90'
      }
      {...props}
    />
  ),

  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      target={'_blank'}
      className={
        'font-medium underline underline-offset-4 hover:text-yellow-500 transition-colors duration-300'
      }
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <span className={' text-body-4 font-body-4 leading-body-4'} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={'my-6 ml-6 list-disc '} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={'my-6 ml-6 list-decimal '} {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={'mt-2 '} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground'}
      {...props}
    />
  ),
  img: ({ className, alt, src }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className=" overflow-hidden w-[300px] md:w-[500px] lg:w-[850px] lg:h-auto mb-2 mx-auto">
      <Image
        src={src as string}
        alt={alt as string}
        width={800}
        height={800}
        className={
          'rounded-md border hover:scale-110 transition-transform ease-in-out duration-500'
        }
      />
    </div>
  ),
  hr: ({ ...props }) => (
    <hr className="my-8 border-t border-foreground/10" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={'w-full'} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={'m-0 border-t p-0 even:bg-muted'} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'
      }
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'
      }
      {...props}
    />
  ),
  pre: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className={' flex px-12 py-4 rounded-sm'} {...props}>
      {children}
    </pre>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={'text-caption-2'} {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
