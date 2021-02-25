import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import ProjectLinks from "components/ProjectLinks"

const ImgContainer = styled.div`
  grid-column: ${props => (props.position === "right" ? "7/-2" : "2/7")};
  grid-row: ${props => props.row};
  height: 300px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 2000px) {
    grid-column: ${props => (props.position === "right" ? "7/-2" : "4/7")};
  }
`

const PrimaryCopy = styled.p`
  grid-column: ${props => (props.position === "right" ? "2/6" : "8/-2")};
  grid-row: ${props => props.row};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 2000px) {
    grid-column: ${props => (props.position === "right" ? "4/6" : "8/-4")};
  }
`

const MainHeader = styled.h3`
  font-size: 28px;
  line-height: 34px;
  color: ${colours.primaryMain};
  font-weight: 400;
`

const SecondaryProject = ({
  position,
  row,
  backgroundImg,
  title,
  description,
  project,
}) => (
  <>
    <ImgContainer position={position} row={row}>
      <img
        src={backgroundImg}
        alt="A person who looks like me at this point in the development of this portfolio."
      />
    </ImgContainer>
    <PrimaryCopy position={position} row={row}>
      <MainHeader>{title}</MainHeader>
      <ProjectLinks project={project} />
      <p>{description}</p>
    </PrimaryCopy>
  </>
)

export default SecondaryProject
