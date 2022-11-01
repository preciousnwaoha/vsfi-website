import React from 'react'
import styled from "styled-components"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri"
import {SiGooglepodcasts} from "react-icons/si"

const Footer = () => {
  return (
    <FooterStyled>

      <section>
        <div className='h3-socials'>
          <h3>We are a growing community of virtue</h3>
          <div className="socials">
            <span><FiFacebook /> </span>
            <span><FiInstagram /></span>
            <span><FiTwitter /></span>
            <span><SiGooglepodcasts /></span>
          </div>
        </div>
        <div className="fellowship">
          <h4>fellowship</h4>
          <div>
            <span>D</span><p>345 Mayflower Drive Freeport, NY 23112</p>
          </div>
          <div>
            <span>D</span><p>345 Mayflower Drive Freeport, NY 23112</p>
          </div>
          <div>
            <span>D</span><p>345 Mayflower Drive Freeport, NY 23112</p>
          </div>
        </div>
        <div className='resources'>
          <h4>resources</h4>
            <p>Blog</p>
            <p>Books</p>
            <p>Devotional</p>
        </div>

      </section>

      <div className="copyright">
      Copyright © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://www.gatsbyjs.com">vsfi.</a> <span> All Rights Reserved.</span>
      </div>
     
    </FooterStyled>
  )
}


export const FooterStyled = styled.footer`
  width: 100%;
  background: var(--primary-700);
  color: var(--text-white-700);
  

  section {
    padding: 0.5rem;
    padding-bottom: 1.5rem;
  }
  


  h4 {
    font-size: 1.125rem;
    margin-bottom: 0.85rem;
   text-transform: capitalize;
  }

  .h3-socials {
    border: 1px solid red;

  }

  .h3-socials h3 {
    /* font-size: 2rem; */
    margin-bottom: 1.5rem;
  }

  .socials {
    border: 1px solid red;
    display: inline-block;
    display: flex;

  }

  .socials span {
    border: 1px solid white;
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .fellowship {
    border: 1px solid red;
  }
  
  .fellowship div {
    border: 1px solid red;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
  }

  

  .fellowship div p, .fellowship div span, .resources p {
    display: inline-block;
    margin: 0;
    font-size: 0.75rem;
  }

  .fellowship div span {
    display: inline-block;
    border: 1px solid white;
    margin-right: 0.5rem;
  }

  .resources {
    display: flex;
    flex-direction: column;
  }
  .resources p {
    margin-bottom: 0.5rem;
  }

  .copyright {
    border: 1px solid red;
    font-size: 0.6rem;
    text-align: center;
    padding: 0.5rem;
  }

  .copyright a {
    font-size: inherit;
    text-decoration: underline;
  }

  .copyright span {
    font-size: 0.65rem;
    display: inline-block;
    margin-left: 0.25rem;
  }
`

export default Footer