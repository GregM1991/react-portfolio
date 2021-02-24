import React from "react"
import { colours } from "styles/colours"
import ProjectLinks from "components/ProjectLinks"
import styled from "styled-components"

const MainHeader = styled.h3`
  grid-column: 2/-2;
  font-size: 40px;
  line-height: 48px;
  color: ${colours.primaryDark};
  font-weight: 700;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
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
`

const PrimaryDescription = styled.p`
  grid-column: 2/-2;
  grid-row: 4;
  font-weight: 400;
  margin: 25px 0 50px;

  @media (min-width: 2000px) {
    grid-column: 4/-4;
  }
`

const PrimaryProject = () => (
  <>
    <MainHeader>What's in the works</MainHeader>
    <ImgContainer>
      <img
        src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2546&q=80"
        alt="A person who looks like me at this point in the development of this portfolio."
      />
    </ImgContainer>
    <SecondaryHeader>
      Flicksy
      <ProjectLinks project="Flicksy" />
    </SecondaryHeader>

    <PrimaryDescription>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ipsam,
      eaque architecto qui autem quibusdam distinctio vel repudiandae
      perferendis voluptatibus.
    </PrimaryDescription>
  </>
)

export default PrimaryProject
