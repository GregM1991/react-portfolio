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
  font-size: 1.6em;
  line-height: 40px;
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

  a {
    list-style: none;
    font-size: 1.3rem;
    font-weight: 900;
    padding: 0 15px;
  }
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
        <a>Work</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="blog">
        <a>Blog</a>
      </Link>
    </LinksContainer>
  </NavContainer>
)

export default Nav
