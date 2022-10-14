import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyled>
     © {new Date().getFullYear()} &middot;
          {` `}
          <a href="https://www.gatsbyjs.com">vsfi</a>
    </FooterStyled>
  )
}


export const FooterStyled = styled.footer`
  width: 100%;
`

export default Footer