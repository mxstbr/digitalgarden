/* @jsx jsx */
import { jsx } from "theme-ui"
import Text from "./Text"

export default props => (
  <Text
    fontSize={6}
    as="h1"
    {...props}
    fontFamily='"SF Pro Display"'
    descenderHeightScale={0.1521}
    capHeight={0.7}
  />
)
