import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import Nav from "components/Nav"

import { getSortedPostsData } from "lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Home = ({ allPostsData }) => (
  <>
    <Head>
      <title>Greg's Portfolio Site</title>
    </Head>
    <Nav />
    <h1>Hello</h1>
  </>
)

export default Home
