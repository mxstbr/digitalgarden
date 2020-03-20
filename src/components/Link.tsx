/* @jsx jsx */
import { jsx } from "strict-ui"
import { Link } from "gatsby"

export default props => {
  const href = props.to || props.href
  const Comp = href.indexOf("/") === 0 ? Link : "a"

  return (
    <Comp
      {...props}
      href={href}
      to={href}
      sx={{
        color: "brand.seven",
        textDecoration: "none",
        "&:visited": {
          color: "brand.nine",
        },
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    />
  )
}
