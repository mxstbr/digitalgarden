/* @jsx jsx */
import { jsx } from "theme-ui"
import Text from "./Text"

export default props => (
  <Text as="li" {...props} sx={{ display: "list-item", ...(props.sx || {}) }} />
)
