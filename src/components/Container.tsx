/* @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  <div
    sx={{ margin: "0 auto!important", maxWidth: "60ch", ...(props.sx || {}) }}
    {...props}
  />
)
