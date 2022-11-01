import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import {StaticQuery, graphql} from "gatsby"
import {BsFillEyeFill} from "react-icons/bs"


const Featured = () => 

    <StaticQuery
        query={graphql`
        query {
          allSanityAnnouncement {
            nodes {
              title
              slug {
                current
                _type
                _key
              }
              views
              body {
                children {
                  text
                }
              }
              publishedAt(locale: "")
              mainImage {
                asset {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      `}
        render={data => {
            
            const { allSanityAnnouncement: {nodes:features} } = data
            
            console.log("fetures", features)
            
            return (
                <FeaturedStyled>
                    {features.map((feature, index ) => {
                        return (
                            <div className='item'  key={index}>
                                <GatsbyImage image={feature.mainImage.asset.gatsbyImageData} className={"image"} alt={feature.title} placeholder={"traced-svg"} />
                                <div className="theme-keep"></div>
                                <div className='views'>
                                <span><BsFillEyeFill /></span><span>{feature.views || 0}</span>
                                </div>
                                
                                <h2>{feature.title}</h2>
                                <div className="date-time">
                                <p>{feature.publishedAt}</p>
                                <p>{feature.publishedAt}</p>
                                </div>
                                

                            </div>
                        )
                    })}

            
                </FeaturedStyled>
            )}
        }
    />

export const FeaturedStyled = styled.section`
    border: 1px solid red;
    color: white;
    

    .item {
        border: 1px solid blue;
        height: 50vh;
        max-height: 300px;
        margin: 1rem 0.5rem;
        position: relative;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .image {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: contain;
        z-index: -1;
    }

    .theme-keep {
        background: var(--primary-700);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: -1;

    }
    
    h2 {
        color: white;
    }

    .views {
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid red;
        display: inline-block;
        margin: 0.25rem;
    }
    .views span {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 20px;
        margin: 0.25rem;
        padding: 0;
        display: inline-block;
    }

    .views span:last-of-type {
        transform: translateY(-3px);
    }

    .date-time {
        border: 1px solid red;
        align-self: flex-end;
    }

`

export default Featured