import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { colours } from "styles/colours"

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colours.primaryDark};
  font-size: 16px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;

  a {
    color: ${colours.primaryDark};
  }

  * + * {
    margin-left: 10px;
  }
`

const ProjectLinks = ({ project }) => (
  <LinksContainer>
    <Link href="https://github.com/GregM1991" target="_blank">
      <a>
        <span>Live</span>
      </a>
    </Link>
    <Link href={`https://github.com/GregM1991/${project}`}>
      <a target="_blank">
        <i class="devicon-github-original"></i>
      </a>
    </Link>
  </LinksContainer>
)

export default ProjectLinks
