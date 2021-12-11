import React from 'react'
import { Link, useParams } from 'react-router-dom'

// ================ Tracks as displayed on the 'Show' page ================ //

const SingleTrack = ({ tracks, edit, deleteTrack }) => {
  // get the params from the url
  const params = useParams()
  const id = parseInt(params.id)
  
  // find the track the user wants to see based on the param 
  const track = tracks.find((t) => t.id === id)
  // console.log(track)
  
  return (
    <div>
      <img src={track?.albumCover} alt="Album Cover" />
      <h2>{track?.album}</h2>
      <h1>{track?.title}</h1>
      <h2>{track?.artist}</h2>
      <h3>{track?.genre}</h3>

      <audio src={track?.mp3Url} controls>
        Your browser is unsupported
      </audio>

      <Link to="/">
        <button>Go back</button>
      </Link>
      <button onClick={() => edit(track)}>Edit</button>
      <button onClick={() => deleteTrack(track)}>Delete</button>
    </div>
  )
}

export default SingleTrack
