import React from 'react'
import { Link } from 'react-router-dom'

const Track = ({ track }) => {
  

  return (
    <div>
      <Link to={`/track/${track.id}`}>
        <h1>{track.title}</h1>
      </Link>
      <h2>{track.artist}</h2>
      {/* <h2>{track.album}</h2> */}
    </div>
  )
}

export default Track
