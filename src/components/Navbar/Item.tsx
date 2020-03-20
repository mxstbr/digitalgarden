/* @jsx jsx */
import { jsx } from "strict-ui"
import Link from "../Link"
import Text from "../Text"

export default props => {
  return (
    <Link to={props.to}>
      <Text sx={{ color: "text", ...(props.sx || {}) }} {...props}>
        {props.children}
      </Text>
    </Link>
  )
}
