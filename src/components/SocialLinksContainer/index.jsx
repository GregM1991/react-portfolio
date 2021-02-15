import React from "react"
import styled from "styled-components"
import Link from "next/Link"
import { colours } from "styles/colours"

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${colours.primaryLight};
  }

  a + a {
    margin-left: 20px;
  }
`

const SocialLinksContainer = () => (
  <LinksContainer>
    <Link href="https://github.com/GregM1991" target="_blank">
      <a>
        <i class="fab fa-github fa-2x"></i>
      </a>
    </Link>
    <Link href="https://twitter.com/I_Too_Code" target="_blank">
      <a>
        <i class="fab fa-twitter fa-2x"></i>
      </a>
    </Link>
    <Link
      href="https://www.linkedin.com/in/greg-martin-76688678/"
      target="_blank"
    >
      <a>
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
    </Link>
    <Link href="mailto:gregm31@live.com" target="_blank">
      <a>
        <i class="fas fa-envelope fa-2x"></i>
      </a>
    </Link>
  </LinksContainer>
)

export default SocialLinksContainer
