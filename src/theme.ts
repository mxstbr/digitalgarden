import theme from "theme-ui-preset-nice-boys"

let sizes = theme.sizes

sizes[4] = "18px"
sizes = [...sizes.slice(0, 5), "20px", ...sizes.slice(5)]

export default {
  ...theme,
  sizes,
  zIndices: [1, 100, 200, 300, 400, 500, 600],
}
