import Head from "next/head"
import styled from "styled-components"
import { getSortedPostsData } from "lib/posts"
import { colours } from "styles/colours"
import SocialLinksContainer from "components/SocialLinksContainer"

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background-color: ${colours.primaryMain};
  text-align: center;
`

const GregDisplayContainer = styled.h1`
  font-size: 8rem;
  line-height: 7.3rem;
  color: #fff;

  span {
    color: ${colours.primaryLight};
  }
`

const Blurb = styled.p`
  color: ${colours.primaryLight};
  font-size: 1.4rem;
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
      <GregDisplayContainer>
        GR
        <br />
        EG<span>.</span>
      </GregDisplayContainer>
      <Blurb>
        A Web Developer, standing in front of the internert, asking it to love
        him.
      </Blurb>
      <SocialLinksContainer />
    </IndexContainer>
  </>
)

export default Home
