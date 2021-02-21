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
    <SecondaryProject position="left" row="5" />
    <SecondaryProject position="right" row="6" />
  </GridWrapper>
)

export default WorkSection
