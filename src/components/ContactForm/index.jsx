import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { colours } from "styles/colours"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  padding: 50px 0;
  background-color: ${colours.primaryDark};
  color: #fff;
`

const FormContainer = styled.form`
  grid-column: 4/-4;
  display: flex;
  flex-direction: column;

  button {
    padding: 15px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    background-color: ${colours.primaryMain};
    border: none;

    &:focus {
      outline: none;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  flex: 1;

  input {
    padding: 10px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    padding: 10px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    margin-bottom: 30px;

    &:focus {
      outline: none;
    }
  }

  & + & {
    margin-left: 20px;
  }
`

const ErrorContainer = styled.div`
  grid-column: 4/-4;
`

const ContactForm = () => {
  useEffect(() => {
    console.log(inputs)
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = inputs

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    console.log(e)
    setInputs({ ...inputs, [e.target.id]: e.target.value })

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: "https://formspree.io/f/xjvpdqzb",
      data: inputs,
    })
      .then(response => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <GridWrapper>
      <FormContainer onSubmit={handleOnSubmit}>
        <TopRow>
          <InputWrapper>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleOnChange}
              required
              value={name}
              placeholder="Spongebob Squarepants"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={email}
              placeholder="spongebob@kahrahtaye.com"
            />
          </InputWrapper>
        </TopRow>

        <InputWrapper>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={message}
            placeholder="HY-YAH"
          />
        </InputWrapper>

        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </FormContainer>

      {status.info.error && (
        <ErrorContainer>
          <div className="error">Error: {status.info.msg}</div>
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </ErrorContainer>
      )}
    </GridWrapper>
  )
}

export default ContactForm
