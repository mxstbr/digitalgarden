/* @jsx jsx */
import { jsx, Flex } from "strict-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout"
import Paragraph from "../../components/Paragraph"
import Link from "../../components/Link"
import Heading from "../../components/Heading"

export default props => {
  const post = props.data.blogPost
  const isDeveloped = new Date(post.date).getTime() < Date.now()

  return (
    <Layout>
      <Flex flexDirection="column" gap={5}>
        <Heading>
          {post.title} {isDeveloped ? "🌺" : "🌱"}
        </Heading>
        <MDXProvider
          components={{
            p: Paragraph,
            a: Link,
            h2: props => <Heading as="h2" fontSize={4} {...props} />,
            h3: props => <Heading as="h3" fontSize={3} {...props} />,
            wrapper: props => (
              <Flex flexDirection="column" gap={4} {...props} />
            ),
            ul: props => (
              <Flex flexDirection="column" gap={1} as="ul" {...props} />
            ),
            ol: props => (
              <Flex flexDirection="column" gap={1} as="ol" {...props} />
            ),
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Flex>
    </Layout>
  )
}
