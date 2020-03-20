// Taken from the styled-components website
// @see https://github.com/styled-components/styled-components-website/blob/a9418dd2d6843e1f0efdb0a6869a954a79bf088b/components/WithIsScrolled.js
import { useEffect, useState } from "react"

const getIsScrolled = () => {
  const scrollTop = document.body != undefined ? document.body.scrollTop : 0
  const isScrolled = (window.pageYOffset || scrollTop) > 0
  return isScrolled
}

export default () => {
  const [isScrolled, setIsScrolled] = useState(getIsScrolled)

  useEffect(() => {
    const onScroll = () => {
      const newIsScrolled = getIsScrolled()
      setIsScrolled(newIsScrolled)
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true })
    }
  }, [])

  return isScrolled
}
