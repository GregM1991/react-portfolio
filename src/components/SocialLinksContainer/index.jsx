import React from "react"
import styled from "styled-components"
import Link from "next/Link"
import { colours } from "styles/colours"

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${colours.primaryMain};
  }

  a + a {
    margin-left: 20px;
  }
`

const SocialLinksContainer = () => (
  <LinksContainer>
    <Link href="https://github.com/GregM1991" target="_blank">
      <a>
        <i class="devicon-github-original"></i>
      </a>
    </Link>
    <Link href="https://twitter.com/I_Too_Code" target="_blank">
      <a>
        <i class="devicon-twitter-original"></i>
      </a>
    </Link>
    <Link
      href="https://www.linkedin.com/in/greg-martin-76688678/"
      target="_blank"
    >
      <a>
        <i class="devicon-linkedin-plain"></i>
      </a>
    </Link>
    <Link href="mailto:gregm31@live.com" target="_blank">
      <a>
        <i class="fas fa-envelope fa-1x"></i>
      </a>
    </Link>
  </LinksContainer>
)

export default SocialLinksContainer
