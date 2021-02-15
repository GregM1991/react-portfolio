import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import Link from "next/link"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background-color: ${colours.primaryMain};
  text-align: center;
  color: #fff;
`

const About = () => (
  <Container>
    <h1>About Me</h1>
    <span>
      View my resume <Link></Link>
    </span>
  </Container>
)

export default About
