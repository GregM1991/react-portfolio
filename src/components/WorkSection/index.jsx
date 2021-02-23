import React from "react"
import styled from "styled-components"
import PrimaryProject from "./PrimaryProject"
import SecondaryProject from "./SecondaryProject"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  padding: 50px 0;
`

const WorkSection = () => (
  <GridWrapper>
    <PrimaryProject />
    <SecondaryProject
      position="left"
      row="6"
      backgroundImg="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2546&q=80"
      title="mArketplace"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam architecto molestias laborum est numquam officia obcaecati eaque quas rerum."
    />
    <SecondaryProject
      position="right"
      row="7"
      backgroundImg="https://images.unsplash.com/photo-1579983093089-59686db09ac4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
      title="One more project here"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam architecto molestias laborum est numquam officia obcaecati eaque quas rerum."
    />
  </GridWrapper>
)

export default WorkSection
