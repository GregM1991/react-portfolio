import React from "react"
import styled from "styled-components"
import { colours } from "../../styles/colours"

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: ${colours.primaryLight};
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colours.primaryMain};
  font-family: Arvo;
  font-weight: 900;
  font-size: 1.7em;
  line-height: 44px;
  padding: 0 40px;
`

const Nav = () => (
  <NavContainer>
    <LogoContainer>
      <h1>
        GR
        <br />
        EG.
      </h1>
    </LogoContainer>
  </NavContainer>
)

export default Nav
