/* @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "strict-ui"
import Text from "../Text"
import useIsScrolled from "../../hooks/use-is-scrolled"

const shouldShow = props => {
  if (props.scrolled) {
    if (props.showOnScroll) return true
    if (props.hideOnScroll) return false
  }
  if (props.showOnScroll) return false
  return true
}

const Handle = props => (
  <span
    sx={{
      transition: "opacity 250ms ease-out, margin 250ms ease-in-out",
      ...(shouldShow(props)
        ? {
            opacity: 1,
          }
        : {
            opacity: 0,
            marginRight: props.marginOnHide || "-.5em",
          }),
      ...props.sx,
    }}
    {...props}
  />
)

const Logo = () => {
  const isScrolled = useIsScrolled()

  return (
    <Flex alignItems="center">
      <Text
        sx={{ transition: "margin 250ms ease-in-out", fontWeight: "normal" }}
        as="h1"
        fontSize={3}
        fontFamily="Georgia, serif"
      >
        <Handle scrolled={isScrolled} showOnScroll>
          &lt;
        </Handle>
        m
        <Handle scrolled={isScrolled} hideOnScroll>
          a
        </Handle>
        x
        <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-.2em">
          &nbsp;
        </Handle>
        st
        <Handle
          scrolled={isScrolled}
          hideOnScroll
          marginOnHide="-.5em; margin-left: -0.34em;"
        >
          oi
        </Handle>
        b
        <Handle scrolled={isScrolled} hideOnScroll>
          e
        </Handle>
        r
        <Handle scrolled={isScrolled} default={0} showOnScroll>
          &nbsp;/&gt;
        </Handle>
      </Text>
    </Flex>
  )
}

export default Logo
