import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  padding: 50px 0;
`

const MainHeader = styled.h1`
  grid-column: 2/-2;
  font-size: 40px;
  line-height: 48px;
  color: ${colours.primaryDark};
  font-weight: 700;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const Blurb = styled.p`
  grid-column: 2/-2;
  margin-top: 20px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const TechLogoContainer = styled.div`
  grid-column: 2/-2;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-size: 48px;
  text-align: center;
  padding: 20px;

  i {
    color: ${colours.primaryMain} !important;
    width: 20%;
    padding: 20px 10px;
  }

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const SkillsSection = () => (
  <GridWrapper>
    <MainHeader>Skills</MainHeader>
    <Blurb>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      quaerat temporibus est! Minus iste officiis beatae in perspiciatis rerum
      quos tenetur ut, cupiditate voluptas doloribus delectus voluptate
      repellat? Cum, ipsa!
    </Blurb>
    <TechLogoContainer>
      <i class="devicon-html5-plain-wordmark"></i>
      <i class="devicon-css3-plain-wordmark"></i>
      <i class="devicon-javascript-plain"></i>
      <i class="devicon-react-original-wordmark"></i>
      <i class="devicon-nodejs-plain-wordmark"></i>
      <i class="devicon-git-plain-wordmark"></i>
      <i class="devicon-sass-original"></i>
      <i class="devicon-ruby-plain-wordmark"></i>
      <i class="devicon-rails-plain-wordmark"></i>
      <i class="devicon-redux-original"></i>
    </TechLogoContainer>
  </GridWrapper>
)

export default SkillsSection
