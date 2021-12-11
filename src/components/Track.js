import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Favorite from './Favorite'

// ================ Tracks as displayed on the 'Index' page ================ //

const Track = ({ track }) => {

  return (
    <div className="track" >
      
      <Link to={`/track/${track.id}`}>
        <h1>{track.title}</h1>
      </Link>

      <h2>{track.artist}</h2>
        <audio src={track?.mp3Url} controls>
          Your browser is unsupported
        </audio>
      <Favorite />
      
    </div>
  )
}

export default Track
