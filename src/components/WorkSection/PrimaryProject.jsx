import React from "react";
import { colours } from "styles/colours";
import ProjectLinks from "components/ProjectLinks";
import styled from "styled-components";

const MainHeader = styled.h3`
  grid-column: 2/-2;
  font-size: 40px;
  line-height: 48px;
  color: ${colours.primaryDark};
  font-weight: 700;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
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

const SecondaryHeader = styled.h1`
  grid-column: 2/-2;
  font-size: 28px;
  line-height: 34px;
  color: ${colours.primaryMain};
  font-weight: 400;
  margin-top: 50px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`;

const PrimaryDescription = styled.p`
  grid-column: 2/-2;
  grid-row: 4;
  font-weight: 400;
  margin: 25px 0 50px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`;

const PrimaryProject = () => (
  <>
    <MainHeader>What's in the works</MainHeader>
    <ImgContainer>
      <img
        src="https://my-portfolio-bucket-51064.s3-ap-southeast-2.amazonaws.com/flicksy-screen-shot-1.jpg"
        alt="A screenshot of my Flicksy application."
      />
    </ImgContainer>
    <SecondaryHeader>
      Flicksy
      <ProjectLinks project="Flicksy" />
    </SecondaryHeader>

    <PrimaryDescription>
      An application built with React and Node, to browse movies and create
      personal movie lists.
    </PrimaryDescription>
  </>
);

export default PrimaryProject;
