/* @jsx jsx */
import { jsx, Flex } from "strict-ui"
import Text from "../Text"
import Container from "../Container"
import HalfWidth from "./HalfWidth"
import Paragraph from "../Paragraph"
import Link from "../Link"

export default () => (
  <footer sx={{ background: "white", paddingY: 7 }}>
    <Flex as={Container}>
      <Flex
        as={HalfWidth}
        flexDirection="column"
        gap={5}
        sx={{ paddingRight: 5 }}
      >
        <Text sx={{ fontWeight: "bold" }}>About this place</Text>
        <Paragraph>
          Welcome to my{" "}
          <Link to="/thoughts/digital-gardens">digital garden</Link>! I'm
          @mxstbr, a JavaScript Engineer from Austria 🇦🇹 in love with React and
          Node.
        </Paragraph>
      </Flex>
      <Flex as={HalfWidth} flexDirection="column" gap={5}>
        <Text sx={{ fontWeight: "bold" }}>Social media</Text>
        <Flex flexDirection="column" as="ul" gap={4} sx={{ padding: 0 }}>
          <Text as="li">
            <Link to="https://github.com/mxstbr/mxstbr.com">
              View source on GitHub
            </Link>
          </Text>
          <Text as="li">
            <Link to="https://twitter.com/mxstbr">Follow me on Twitter</Link>
          </Text>
          <Text as="li">
            <Link to="https://instagram.com/mxstbr">
              See my stories on Instagram
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </footer>
)
