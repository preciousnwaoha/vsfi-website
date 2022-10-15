import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyled>

      <section>
        <div className='socials'>
          <h3>We are a growing community of virtue</h3>
    
        </div>
        <div className="fellowship">
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
            <p>Blog</p>
            <p>Books</p>
            <p>Devotional</p>
        </div>

      </section>

      <div className="copyright">
      Copyright © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://www.gatsbyjs.com">vsfi.</a> All Rights Reserved.
      </div>
     
    </FooterStyled>
  )
}


export const FooterStyled = styled.footer`
  width: 100%;
  background: var(--primary-700);
  color: var(--text-white-700);
  padding: 0.5rem;


`

export default Footer