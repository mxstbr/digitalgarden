/* @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Container from "./Container"

export default ({ children }) => (
  <React.Fragment>
    <Navbar />
    <Container sx={{ paddingTop: 7, paddingBottom: 10 }}>{children}</Container>
    <Footer />
  </React.Fragment>
)
