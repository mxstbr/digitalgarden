/* @jsx jsx */
import { Flex, jsx } from "strict-ui"
import Container from "../Container"
import Item from "./Item"
import Logo from "./Logo"
import useIsScrolled from "../../hooks/use-is-scrolled"

export default () => {
  const isScrolled = useIsScrolled()

  return (
    <nav
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        background: isScrolled ? "white" : "transparent",
        padding: 5,
        zIndex: 6,
        transition:
          "background 125ms ease-in-out 0s, box-shadow 125ms ease-in-out 0s",
        ...(isScrolled ? { boxShadow: "large" } : {}),
      }}
    >
      <Container>
        <Flex justifyContent="space-between">
          <Item to="/" fontFamily="Georgia" fontSize={4}>
            <Logo />
          </Item>
          <Flex gap={4}>
            <Item to="/appearances">Appearances</Item>
            <Item to="/oss">Open Source</Item>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}
