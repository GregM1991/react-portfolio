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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css"
      />
    </Head>
    <IntroSection />
    <SkillsSection />
  </>
)

export default Home
