/* @jsx jsx */
import { jsx, Flex } from "strict-ui"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"
import Link from "../components/Link"

export default () => (
  <Layout>
    <Flex gap={5} flexDirection="column">
      <Heading>Hey, I'm Max! 👋</Heading>
      <Paragraph>
        I'm a JavaScript Engineer from Austria 🇦🇹 in love with React and Node. I
        currently work at <Link to="https://gatsbyjs.com">Gatsby</Link>, where I
        am inventing better ways to build websites. Before that I worked at{" "}
        <Link to="https://github.com">GitHub</Link> (Microsoft), who acquired my
        startup <Link to="https://spectrum.chat">Spectrum</Link>.
      </Paragraph>
      <Paragraph>
        If I'm not coding or{" "}
        <Link to="https://twitter.com/mxstbr">tweeting</Link>, I'm likely
        brewing coffee (I'm a huge specialty coffee geek), exploring the world
        or skiing. Welcome to my{" "}
        <Link to="/thoughts/digital-gardens">digital garden</Link>. 🌱
      </Paragraph>
    </Flex>
  </Layout>
)
