import "../styles/global.css"
import Nav from "components/Nav"
import Head from "next/head"
import "@fortawesome/fontawesome-free/css/all.css"
import styled from "styled-components"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1%;
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/a7a040d0a5.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <GridWrapper>
        <Nav />
        <Component {...pageProps} />
      </GridWrapper>
    </>
  )
}
