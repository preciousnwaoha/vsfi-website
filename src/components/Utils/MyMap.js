import React from 'react'
import { Map } from 'react-leaflet'

const MyMap = ({ options }) => {

    if (typeof window !== 'undefined') {
      return (
        <Map {...options}>
          {/* Map code goes here */}
        </Map>
      )
    }
    return null
  
}

export default MyMap;