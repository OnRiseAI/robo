import type { JSX } from 'react'

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc'

const components: MDXRemoteProps['components'] = {
  h1: ({ children }) => <h1 className='text-4xl font-bold'>{children}</h1>,
  h2: ({ children }) => <h2 className='mt-6 text-2xl font-semibold'>{children}</h2>,
  h3: ({ children }) => <h3 className='mt-4 text-xl font-medium'>{children}</h3>,
  h4: ({ children }) => <h4 className='mt-4 text-lg font-medium'>{children}</h4>,
  h5: ({ children }) => <h5 className='mt-4 text-base font-medium'>{children}</h5>,
  h6: ({ children }) => <h6 className='mt-4 text-base font-medium'>{children}</h6>,
  p: ({ children }) => <p className='text-muted-foreground mt-4 text-base'>{children}</p>,
  ul: ({ children }) => <ul className='mt-4 list-disc pl-6'>{children}</ul>,
  ol: ({ children }) => <ol className='mt-4 list-decimal pl-6'>{children}</ol>,
  li: ({ children }) => <li className='text-muted-foreground mt-2'>{children}</li>,
  hr: () => <hr className='my-8 border-0' />,
  pre: ({ children }) => <pre className='bg-muted my-6 overflow-x-auto rounded-lg p-4'>{children}</pre>,
  code: ({ children }) => <code className='bg-muted rounded font-mono text-sm'>{children}</code>
}

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}

export default MDXContent
