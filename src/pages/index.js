import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Layout/Seo"
import WhoWeAre from "../components/HomeComps/WhoWeAre"
import Meeting from "../components/HomeComps/Meeting"
import Featured from "../components/HomeComps/Featured"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <MainStyled>
      
      <section className="hero">
        <h1>Building Women Fellowship</h1>
        <Link to={`/`} className="call">
          Join Us
        </Link>
      </section>
      <WhoWeAre />
      <Meeting />
      <Featured />
      </MainStyled>
      
    </Layout>
  )
}

const MainStyled = styled.main`

  .hero {
    min-height: calc(100vh - 3rem - 35px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem;
  }

  .hero h1 {
    font-size: 2.5rem;
    color: var(--primary-700);
  }

  .call {
    width: auto;
    display: inline-block;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--secondary-700);
    background: var(--secondary-700);
    cursor: pointer;
    transition: background .3s;
  }

  .call:hover {
    background: var(--secondary-700);
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
