import Head from "next/head"
import styled from "styled-components"
import { getSortedPostsData } from "lib/posts"
import { colours } from "styles/colours"

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colours.primaryMain};
  padding: 0 15% 10vh 15%;
  text-align: center;
`

const GregDisplayContainer = styled.h1`
  font-size: 12rem;
  line-height: 11rem;
  color: #fff;

  span {
    color: ${colours.primaryLight};
  }
`

const Blurb = styled.p`
  color: ${colours.primaryLight};
  font-size: 1.8rem;
  line-height: 2.2rem;
  width: 550px;
  padding: 20px 0;
`

const SocialLinkContainer = styled.div``

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
      <SocialLinkContainer></SocialLinkContainer>
    </IndexContainer>
  </>
)

export default Home
