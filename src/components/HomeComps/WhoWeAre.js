import React from 'react'
import styled from 'styled-components'

const WhoWeAre = () => {
  return (
    <WhoWeAreStyled>
        <h2> who we are</h2>
        <article>
          
            <p>Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.</p>

            <p>Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.</p>
        </article>
    </WhoWeAreStyled>
  )
}

export const WhoWeAreStyled = styled.section`
  background: var(--primary-400);
  padding: 0.5rem;


  h2 {
    font-size: 2.5rem;
    color: var(--primary-700);
  }
`

export default WhoWeAre