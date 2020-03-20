/* @jsx jsx */
import { jsx } from "strict-ui"
import Text from "./Text"

export default props => {
  return <Text as="p" fontSize={3} lineHeight={1.7} {...props} />
}
