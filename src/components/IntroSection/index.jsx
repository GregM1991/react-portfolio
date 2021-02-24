import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import SocialLinksContainer from "components/SocialLinksContainer"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  margin-top: 50px;
  padding-bottom: 100px;
`

const GridChildPlacementWrapper = styled.div`
  grid-column: 2/-2;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const GregDisplayContainer = styled.h1`
  grid-column: 2/-2;
  font-size: 60px;
  line-height: 72px;
  color: ${colours.primaryDark};
  font-weight: 700;
  letter-spacing: -2px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const Blurb = styled.p`
  grid-column: 4/11;
  font-weight: 100;
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 20px;
`

const ImgContainer = styled.div`
  grid-column: 2/-2;
  height: 300px;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const AboutCopy = styled.div`
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-weight: 400;
  margin-top: 50px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const IntroSection = () => (
  <GridWrapper>
    <GridChildPlacementWrapper>
      <SocialLinksContainer />
    </GridChildPlacementWrapper>
    <GregDisplayContainer>Greg's place</GregDisplayContainer>
    <Blurb>
      A Web Developer, standing in front of JavaScript, asking it to love him.
    </Blurb>
    <ImgContainer>
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="A person who looks like me at this point in the development of this portfolio."
      />
    </ImgContainer>
    <AboutCopy>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ipsam,
        eaque architecto qui autem quibusdam distinctio vel repudiandae
        perferendis voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem esse
        ullam vero veniam ratione dolorem quod, dolorum facere a itaque aliquid
        neque iste veritatis voluptatem?
      </p>
    </AboutCopy>
  </GridWrapper>
)

export default IntroSection
