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
`

const PrimaryCopy = styled.p`
  grid-column: ${props => (props.position === "right" ? "2/6" : "8/-2")};
  grid-row: ${props => props.row};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MainHeader = styled.h3`
  font-size: 28px;
  line-height: 34px;
  color: ${colours.primaryMain};
  font-weight: 400;
`

const SecondaryProject = ({ position, row }) => (
  <>
    <ImgContainer position={position} row={row}>
      <img
        src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2546&q=80"
        alt="A person who looks like me at this point in the development of this portfolio."
      />
    </ImgContainer>
    <PrimaryCopy position={position} row={row}>
      <MainHeader>mArtketplace</MainHeader>
      <ProjectLinks project="mArtketplace" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius
        fuga, fugit voluptatum a aliquid, ut explicabo ducimus aperiam, ratione
        facilis laboriosam officia eveniet fugiat!
      </p>
    </PrimaryCopy>
  </>
)

export default SecondaryProject
