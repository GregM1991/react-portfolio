import React from "react"
import styled from "styled-components"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  padding: 50px 0;
`

const Container = styled.form`
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`

const Input = styled.input`
  grid-column: ${props => props.column};
`

const ContactForm = () => {
  return (
    <GridWrapper>
      <Container>
        <Input type="text" name="name" placeholder="Name" column="1/2" />
        <Input type="email" name="email" placeholder="Email" column="2/3" />
        <Input type="text" name="subject" placeholder="Subject" column="1/2" />
        <Input type="tel" name="number" placeholder="Number" column="2/3" />
        <Input
          as="textarea"
          name="message"
          placeholder="Message"
          column="1/3"
        />
      </Container>
    </GridWrapper>
  )
}

export default ContactForm
