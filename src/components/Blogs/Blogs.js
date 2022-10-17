import React, { useState } from "react"
import HorizontalScrollingElement from "../Layout/HorizontalScrollingElement"
import styled from "styled-components"

const DEFAULT_BLOGS = [
  {
    id: "b1",
    title: "Essense of Deep Worship",
    views: 3,
    createdAt: "15/10/2022",
    content:
      "Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship ssense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship",
  },
  {
    id: "b2",
    title: "Essense of Deep Worship",
    views: 3,
    createdAt: "15/10/2022",
    content:
      "Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship ssense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship",
  },
  {
    id: "b3",
    title: "Essense of Deep Worship",
    views: 3,
    createdAt: "15/10/2022",
    content:
      "Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship ssense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship Essense of Deep Worship",
  },
]

const Blogs = () => {
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
          D
        </button>
        <button onClick={rightScrollHandler} onKeyDown={handleKeyDownRight}>
          D
        </button>
      </div>
      <HorizontalScrollingElement scroll={scroll}>
        {DEFAULT_BLOGS.map((blog, index) => {
          return (
            <div key={blog.id} className={"blog"}>
              <div className="image"></div>
              <div className="text">
                <h4>{blog.title}</h4>
                <div className="date-view">
                  <p className="date">{blog.createdAt}</p>
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
    padding-top: 65%;
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
