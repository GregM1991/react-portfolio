import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background-color: ${colours.primaryMain};
  text-align: center;
`

const WorkContainer = styled.div`
  display: flex;
`

const WorkBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const ImgContainer = styled.div``

const Work = () => (
  <Container>
    <WorkContainer>
      <WorkBlock>
        <ImgContainer></ImgContainer>
      </WorkBlock>
    </WorkContainer>
  </Container>
)

export default Work
