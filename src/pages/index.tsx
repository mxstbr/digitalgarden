/* @jsx jsx */
import { jsx, Flex } from "strict-ui"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"
import Link from "../components/Link"
import ListItem from "../components/ListItem"

export default () => (
  <Layout>
    <Flex gap={7} flexDirection="column">
      <Flex gap={5} flexDirection="column">
        <Heading>Hey, I'm Max! 👋</Heading>
        <Paragraph>
          I'm a JavaScript Engineer from Austria 🇦🇹 in love with React and Node.
          I currently work at <Link to="https://gatsbyjs.com">Gatsby</Link>,
          where I am inventing better ways to build websites. Before that I
          worked at <Link to="https://github.com">GitHub</Link> (Microsoft), who
          acquired my startup <Link to="https://spectrum.chat">Spectrum</Link>.
        </Paragraph>
        <Paragraph>
          If I'm not coding or{" "}
          <Link to="https://twitter.com/mxstbr">tweeting</Link>, I'm likely
          brewing coffee (I'm a huge specialty coffee geek), exploring the world
          or skiing. Welcome to my{" "}
          <Link to="/thoughts/digital-gardens">digital garden</Link>. 🌱
        </Paragraph>
      </Flex>
      <Heading as="h2" fontSize={5}>
        Thoughts
      </Heading>
      <Flex gap={6} flexDirection="column">
        <Heading as="h3" fontSize={3}>
          Tech
        </Heading>
        <Flex
          flexDirection="column"
          gap={6}
          as="ul"
          sx={{ paddingInlineStart: "18px" }}
        >
          <ListItemName
            to="/thoughts/css-in-js"
            title="Why I Write CSS in JavaScript"
            description="For three years, I have styled my web apps without any `.css` files. Instead, I have written all the CSS in JavaScript. Let me explain."
          />
          <ListItemName
            to="/thoughts/tech-choice-regrets-at-spectrum"
            title="Tech Choices I Regret at Spectrum"
            description="Spectrum is an open source chat app for large online communities. With the benefit of hindsight, here are the technology choices I regret."
          />
        </Flex>
      </Flex>
      <Flex gap={5} flexDirection="column">
        <Heading as="h3" fontSize={3}>
          Life
        </Heading>
        <Flex
          flexDirection="column"
          gap={5}
          as="ul"
          sx={{ paddingInlineStart: "18px" }}
        >
          <ListItemName
            to="/thoughts/css-in-js"
            title="Career Progression"
            description="For three years, I have styled my web apps without any `.css` files. Instead, I have written all the CSS in JavaScript. Let me explain."
          />
          <ListItemName
            to="/thoughts/tech-choice-regrets-at-spectrum"
            title="What I want to achieve in life"
            description="Spectrum is an open source chat app for large online communities. With the benefit of hindsight, here are the technology choices I regret."
          />
        </Flex>
      </Flex>
    </Flex>
  </Layout>
)

function ListItemName(props) {
  return (
    <ListItem>
      <Flex flexDirection="column" gap={2}>
        <Link to={props.to}>{props.title}</Link>
        {/* <Paragraph
          sx={{
            color: "secondaryText",
          }}
        >
          {props.description}
        </Paragraph> */}
      </Flex>
    </ListItem>
  )
}
