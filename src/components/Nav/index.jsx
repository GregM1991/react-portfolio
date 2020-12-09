import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import Link from "next/link"

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: ${colours.primaryLight};
  font-family: Arvo;
  color: ${colours.primaryMain};
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  font-size: 1.7em;
  line-height: 44px;
  padding-left: 60px;
  flex: 2;
  cursor: pointer;
`

const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-right: 60px;
  cursor: pointer;
`

const LinkWrapper = styled.li`
  list-style: none;
  font-size: 1.5rem;
  font-weight: 900;
`

const Nav = () => (
  <NavContainer>
    <Link href="/">
      <LogoContainer>
        <h1>
          GR
          <br />
          EG.
        </h1>
      </LogoContainer>
    </Link>

    <LinksContainer>
      <Link href="/work">
        <LinkWrapper>
          <a>Work</a>
        </LinkWrapper>
      </Link>
      <Link href="/about">
        <LinkWrapper>
          <a>About</a>
        </LinkWrapper>
      </Link>
      <Link href="blog">
        <LinkWrapper>
          <a>Blog</a>
        </LinkWrapper>
      </Link>
    </LinksContainer>
  </NavContainer>
)

export default Nav
