import Head from "next/head"
import { getSortedPostsData } from "lib/posts"

import IntroSection from "../components/IntroSection"

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
    <IntroSection />
  </>
)

export default Home
