import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const featuredList = [
        {
            id: "f1",
            title: "Wommen Leaders Retreat",
            content: "",
            pic: "/vsfi-1.jpg",
            date: "Sat 25th Nov 2022",
            time: "4:30 pm",
        },

        {
            id: "f2",
            title: "Wommen Leaders Retreat",
            content: "",
            pic: "/vsfi-1.jpg",
            date: "Sat 25th Nov 2022",
            time: "4:30 pm",
        },
        {
            id: "f3",
            title: "Wommen Leaders Retreat",
            content: "",
            pic: "vsfi-1.jpg",
            date: "Sat 25th Nov 2022",
            time: "4:30 pm",
        },
]

const Featured = () => {
    
    
    // if (!!featuredList) {
    //     return
    // }

  return (
    <FeaturedStyled>

        {featuredList.map((feature, index ) => {
            return (
                <div className='item'  key={index}>
                    {/* <GatsbyImage image={`${feature.pic}`} className={"image"} alt={feature.title} placeholder={"traced-svg"} /> */}
                    <h2>{feature.title}</h2>
                    <p>{feature.date}</p>
                    <p>{feature.time}</p>
                </div>
            )
        })}
        
    </FeaturedStyled>
  )
}

export const FeaturedStyled = styled.section`
    border: 1px solid red;

    .item {
        border: 1px solid blue;
        height: 50vh;
        margin: 1rem 0;
    }

    .image {
        width: 100%;
        height: 400px;
    }

    
`

export default Featured