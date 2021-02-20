import Head from "next/head"
import { getSortedPostsData } from "lib/posts"
import IntroSection from "components/IntroSection"
import SkillsSection from "components/SkillsSection"

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
    <SkillsSection />
  </>
)

export default Home
