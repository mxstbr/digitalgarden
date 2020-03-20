/* @jsx jsx */
// This was adapted from https://github.com/seek-oss/braid-design-system/blob/master/lib/hooks/typography/basekick.ts,
// see https://youtu.be/jnV1u67_yVg?t=640 for background info on what this is and why you would do it
import { jsx } from "theme-ui"
import theme from "../theme"

const PREVENT_MARGIN_COLLAPSING_PADDING = 1

export default props => {
  const fontSize = parseInt(theme.sizes[(props.fontSize || 3) + 1])
  const lineHeight = props.lineHeight || 1.3
  const Comp = props.as || "span"

  const fontFamily = props.fontFamily || '"SF Pro Text"'
  const descenderHeightScale = props.descenderHeightScale || 0.1
  const capHeight = props.capHeight || 0.85
  const lineHeightScale = lineHeight / fontSize
  const typeOffset = (lineHeightScale - 1) / 2 + descenderHeightScale

  const heightCorrection = lineHeight - capHeight * fontSize

  return (
    <Comp
      {...props}
      sx={{
        ...(props.sx || {}),
        fontFamily,
        display: "block",
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}em`,
        paddingTop: `${PREVENT_MARGIN_COLLAPSING_PADDING}px`,
        transform: `translateY(${-typeOffset}em)`,
        "&:before": {
          content: '""',
          marginTop: `${heightCorrection +
            PREVENT_MARGIN_COLLAPSING_PADDING * 2}px`,
          display: "block",
          height: 0,
        },
      }}
    />
  )
}
