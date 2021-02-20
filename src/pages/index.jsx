import Head from "next/head"
import styled from "styled-components"
import { getSortedPostsData } from "lib/posts"
import { colours } from "styles/colours"
import SocialLinksContainer from "components/SocialLinksContainer"

const IndexContainer = styled.div`
  grid-column: 1/13;
  display: flex;
  flex-direction: column;
`

const GregDisplayContainer = styled.h1`
  grid-column: 3/9;
  font-size: 4rem;
  color: ${colours.primaryDark};
  font-weight: 700;

  span {
    color: ${colours.primaryDark};
  }
`

const Blurb = styled.p`
  color: ${colours.primaryDark};
  font-weight: 100;
  font-size: 2rem;
  line-height: 1.7rem;
  width: 550px;
  padding: 15px 0;
`

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
    <IndexContainer>
      <GregDisplayContainer>Welcome</GregDisplayContainer>
      <Blurb>
        A Web Developer, standing in front of the internert, asking it to love
        him.
      </Blurb>
      <SocialLinksContainer />
    </IndexContainer>
  </>
)

export default Home
