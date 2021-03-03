import React from "react";
import styled from "styled-components";
import { colours } from "styles/colours";
import SocialLinksContainer from "components/SocialLinksContainer";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  margin-top: 50px;
  padding-bottom: 100px;
`;

const GridChildPlacementWrapper = styled.div`
  grid-column: 2/-2;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`;

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
`;

const Blurb = styled.p`
  grid-column: 2/7;
  font-weight: 100;
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 20px;

  @media (min-width: 2000px) {
    grid-column: 4/11;
  }
`;

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
`;

const AboutCopy = styled.div`
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-weight: 400;
  margin-top: 50px;

  strong {
    color: ${colours.primaryDark};
  }

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`;

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
        <strong>Hello there!</strong> Welcome to Greg's place. I'm an
        introverted chap (unless there's a few beers sunk into me) who loves
        building out sites and apps in code! <br /> <br />
        When I think about my journey into 0's and 1's land, I really have to
        laugh at myself. I've always been a visual person, I grew up drawing
        comics and cartoons in my school books. I studied Graphic Design and
        Illustration and ultimately went on to work in both fields. The idea of
        coding was always rather daunting, and I never expected myself to learn,
        let alone be working in the industry.
      </p>
      <p>
        That being said, after I purchased my first course on Udemy on a slow
        month without any clients, I was absolutely swallowed by Web
        Development. I found it so wild that I could create these lovely user
        interfaces, and then access those UI elements to make them interactive,
        to come up with a wholly unique space.
        <br />
        <br />
        Ever since then I've been honing my skills and learning everything I can
        get my grubby mits on. I graduated Coder Acadamy with a Diploma of IT
        and have been working as a Full Stack Developer with React (in Next JS)
        and Node.
      </p>
    </AboutCopy>
  </GridWrapper>
);

export default IntroSection;
