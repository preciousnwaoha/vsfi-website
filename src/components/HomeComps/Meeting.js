import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import MyMap from "../Utils/MyMap"

const Meeting = () => {

    const defaultMapProps = {
        position: [51, -1],
        zoom: 13,
        markerText: ""
      }

  return (
    <MeetingStyled>
        <article className='wk-meeting' >
            <div className="date-time">
                <h2>meetup weekly</h2>
                <div>
                    <p>every saturday</p>
                    <h5>6:00pm</h5>
                    <p>C A T</p>
                </div>
            </div>
            <div className='location'>
                <p>At Jos Street 3rd Avenue Gwarimpa Abuja</p>
                <div className='map'>
                    {/* <StaticImage src="../../images/maps.webp" alt="A Map" layout='fullWidth' placeholder="blurred"  /> */}
                    <MyMap 
        // position={[51, -1]} 
        // zoom={13}
        // markerText={""}
    />
                </div>
            </div>
                
        </article>

        <article className='next-meeting'>
        <h4>next meeting</h4>
        <div className='calender'>

        </div>
        </article>

        
    </MeetingStyled>
  )
}

export const MeetingStyled = styled.section`


    .wk-meeting {
        padding: 1rem 0.5rem;
    }

    .date-time {
        display: flex;
        flex-wrap: wrap;
    }

    .date-time h2 {
        width: 50%;
        margin: 0;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .date-time div {
        background: var(--secondary-400);
        display: inline-block;
        width: 50%;
        padding: 1rem;
    }

    .date-time div p {
        margin: 0;
        width: 100%;
    }

    .date-time div h5 {
        font-size: 2rem;
        margin: 0;
        width: 100%;
        
    }

    .location {
        border: 1px solid red;
        margin-top: 1rem;
    }

    .location p {
        font-size: 0.85rem;
    }

    .map {
        height: 200px;
        background: mediumseagreen;
    }

    .next-meeting {
        background: var(--secondary-400);
        margin: 1rem 0.5rem;
    }
    .next-meeting h4 {
        background: var(--light-700);
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0;
        color: var(--primary-700);
        text-transform: uppercase;
        font-size: 1rem;
        font-family: var(--font-2);
    }

    .next-meeting div {
        height: 250px;
    }


`

export default Meeting