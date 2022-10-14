import * as React from "react"
import PropTypes from "prop-types"
import Logo from "../UI/Logo"
import MenuIcon from "../UI/MenuIcon"
import styled from "styled-components"

const Header = ({ siteTitle }) => {

  return (
    <HeaderStyled>
      <Logo />
      <MenuIcon />
    </HeaderStyled>
  )
}
  

export const HeaderStyled = styled.header`
  padding: 1rem;
  padding-top: 2rem;
  background: var(--primary-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
` 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
