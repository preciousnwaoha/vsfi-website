import React, { useState } from "react"
import HorizontalScrollingElement from "../Layout/HorizontalScrollingElement"
import styled from "styled-components"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export const query = graphql`
  query {
    allSanityPost {
      nodes {
        author {
          image {
            asset {
              gatsbyImageData
              altText
            }
          }
          name
        }
        body {
          children {
            text
            _type
            marks
            _key
          }
        }
        title
        id
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        publishedAt(locale: "")
        slug {
          current
        }
        views
      }
    }
  }
`

const Blogs = () => {
  const {allSanityPost : {nodes: posts}} = useStaticQuery(query)

  const [scroll, setScroll] = useState({
    isScroll: false,
    dir: "none",
    scrollDist: 100,
  })

  const leftScrollHandler = () => {
    setScroll({ isScroll: true, dir: "left", scrollDist: 100 })
  }

  const rightScrollHandler = () => {
    setScroll({ isScroll: true, dir: "right", scrollDist: 100 })
  }

  const handleKeyDownLeft = ev => {
    // check keys if you want
    if (ev.keyCode === 13) {
      this.focus()
    }
  }

  const handleKeyDownRight = ev => {
    // check keys if you want
    if (ev.keyCode === 14) {
      this.focus()
    }
  }

  // non interact error.

  return (
    <BlogsStyled>
      <h2>Reads</h2>
      <div className="controls">
        <button onClick={leftScrollHandler} onKeyDown={handleKeyDownLeft}>
        <BsChevronLeft />
        </button>
        <button onClick={rightScrollHandler} onKeyDown={handleKeyDownRight}>
          <BsChevronRight />
        </button>
      </div>
      <HorizontalScrollingElement scroll={scroll}>
        {posts.map((blog) => {
          return (
            <div key={blog.id} className={"blog"}>
              {/* <div className="image"></div> */}
              <GatsbyImage image={blog.mainImage.asset.gatsbyImageData} className="image" alt={blog.title} />
              <div className="text">
                <h4>{blog.title}</h4>
                <div className="date-view">
                  <p className="date">{blog.publishedAt}</p>
                  <p className="views">{blog.views}</p>
                </div>
              </div>
            </div>
          )
        })}
      </HorizontalScrollingElement>
    </BlogsStyled>
  )
}

export const BlogsStyled = styled.section`
  border: 1px solid red;
  padding: 0.5rem;

  .controls {
    display: flex;
    border: 1px solid red;
    justify-content: space-between;
    align-items: center;
  }

  .controls button {
    border: 1px solid var(--primary-700);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
  }

  .controls button:focus, .control button:focus-within {
    outline: none !important;
  }

  .blog {
    width: 80%;
    min-width: 80%;
    border: 1px solid red;
    margin-right: 0.5rem;
    background: var(--secondary-400);
    cursor: pointer;
  }

  .blog:last-of-type {
    margin-right: 0;
  }

  .image {
    /* padding-top: 65%; */
    border: 1px solid red;
    background: var(--light-700);
  }

  .text {
    padding: 0.5rem;
  }

  .text h4 {
    border: 1px solid red;
    margin: 0.5rem 0;
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }

  .text .date-view {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  .text .date-view p {
    margin: 0;
    font-size: 0.85rem;
  }
`

export default Blogs
