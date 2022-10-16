import React, { useEffect, useRef } from "react";
import styled from "styled-components";



const HorizontalScrollingElement = ({
  children,
  scroll = { isScroll: false, dir: "none", scrollDist: 100},
  isList = false,
}) => {
  const scrollElemRef = useRef();

  useEffect(() => {
    console.log("in effect");
    if (scroll.isScroll === true) {
      if (scroll.dir === "left") {
        console.log("in if left");
        const slider = scrollElemRef.current;
        slider.scrollLeft = slider.scrollLeft - scroll.scrollDist;

      }
      if (scroll.dir === "right") {
        console.log("in if right");
        const slider = scrollElemRef.current;
        slider.scrollLeft = slider.scrollLeft + scroll.scrollDist;

      }
    }
  }, [scroll]);

  return (
    <>
      {!isList && (
        <DivStyled
          ref={scrollElemRef}
        >
          {children}
        </DivStyled>
      )}

      {isList && (
        <UlStyled
          ref={scrollElemRef}
        >
          {children}
        </UlStyled>
      )}
    </>
  );
};



export const DivStyled = styled.div`

    position: relative;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: visible;
    overflow-x: scroll;
    padding: 1.5rem 0;
    /* align-items: center; */
    scroll-behavior: smooth;
    /* padding:1rem; */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    overflow: -moz-scrollbars-none; /* Old FireFox */


&::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`

export const UlStyled = styled.ul`
position: relative;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: visible;
    overflow-x: scroll;
    padding: 1.5rem 0;
    /* align-items: center; */
    scroll-behavior: smooth;
    /* padding:1rem; */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    overflow: -moz-scrollbars-none; /* Old FireFox */
    padding-left: 0;
    margin: 0;
    list-style: none;

&::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
` 




export default HorizontalScrollingElement;
