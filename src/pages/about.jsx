import React from "react"
import styled from "styled-components"
import { colours } from "styles/colours"
import Link from "next/link"
import SocialLinksContainer from "components/SocialLinksContainer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colours.primaryMain};
  text-align: center;
  color: #fff;

  span {
    a {
      color: #fff;
      font-weight: bold;
    }
  }
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: -15px;
`

const Paragraph = styled.p`
  width: 60%;
  margin-top: 20px;
  & + & {
    margin: 10px 0 30px;
  }
`

const About = () => (
  <Container>
    <Title>About Me</Title>
    <Paragraph>
      Well hello there, welcome to the about me section. I'm a Junior Web
      Developer livin' it up on the Northern Beaches of beautiful Sydney. I
      started my coding journey around late 2019, mostly teaching myself with
      online courses from Udemy and Youtube. Whilst this was what initially
      skyrocketed my love for development, and got me thinking this could be a
      career option in my life, CoderAcademy is what made me into a Developer.
    </Paragraph>
    <Paragraph>
      Whilst I'm interested in the whole environment and scope of Web
      Development, my main focus is the front end. Using JavaScript to
      manipulate the dom and finding out different ways to mess with and
      manipulate visual elements on the page, to me, is incredibly facinating.
    </Paragraph>
    <SocialLinksContainer />
    <span>
      View my resume{" "}
      <Link href="#" target="_blank">
        here
      </Link>
    </span>
  </Container>
)

export default About
