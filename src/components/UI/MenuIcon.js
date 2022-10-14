import React from 'react'
import styled from 'styled-components'

const MenuIcon = () => {
  return (
    <MenuIconStyled>
        <div></div>
        <div></div>
    </MenuIconStyled>
  )
}

export const MenuIconStyled = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    cursor: pointer;

    div {
      background: var(--light-700);
      height: 1px;
      width: 100%;
    }
    div:last-of-type {
      width: 70%;
    }
`

export default MenuIcon