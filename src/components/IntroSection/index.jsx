import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import SocialLinksContainer from "components/SocialLinksContainer"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1%;
`

const IntroContainer = styled.div`
  grid-column: 3/-3;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

const GregDisplayContainer = styled.h1`
  font-size: 60px;
  line-height: 72px;
  color: ${colours.primaryDark};
  font-weight: 700;
  letter-spacing: -2px;
`

const Blurb = styled.p`
  font-weight: 100;
  font-size: 2rem;
  line-height: 2rem;
`

const IntroSection = () => (
  <GridWrapper>
    <IntroContainer>
      <SocialLinksContainer />
      <GregDisplayContainer>Greg's place</GregDisplayContainer>
      <Blurb>
        A Web Developer, standing in front of the internert, asking it to love
        him.
      </Blurb>
    </IntroContainer>
  </GridWrapper>
)

export default IntroSection
