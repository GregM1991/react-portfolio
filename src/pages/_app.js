import "../styles/global.css"
import Nav from "components/Nav"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/a7a040d0a5.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
