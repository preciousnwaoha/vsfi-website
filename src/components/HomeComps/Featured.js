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
]

const Featured = () => {
    
    
    // if (!!featuredList) {
    //     return
    // }

  return (
    <FeaturedStyled>

        {featuredList.map((feature, index ) => {
            return (
                <div  key={index}>
                    <GatsbyImage image={`${feature.pic}`} alt={feature.title} placeholder={"traced-svg"} />
                    <p>{feature.title}</p>
                </div>
                
            )
        })}

        
    </FeaturedStyled>
  )
}

export const FeaturedStyled = styled.section`

`

export default Featured