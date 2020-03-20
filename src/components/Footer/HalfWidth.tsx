/* @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <div sx={{ width: "50%", ...(props.sx || {}) }} {...props} />
)
