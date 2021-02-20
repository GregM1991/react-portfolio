import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import Link from "next/link"

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1%;
  height: 100px;
  font-family: Arvo;
  color: ${colours.primaryDark};
`

const LogoContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.2em;
  cursor: pointer;
`

const LinksContainer = styled.ul`
  grid-column: -3/-5;
  cursor: pointer;
  margin: auto 0;
  font-family: "Raleway", serif;

  a {
    list-style: none;
    font-size: 1.3rem;
    font-weight: 100;
    color: ${colours.primaryDark};
  }

  a + a {
    margin-left: 15px;
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
    </LinksContainer>
  </NavContainer>
)

export default Nav
