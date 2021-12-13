import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'

// ================ Tracks as displayed on the 'Show' page ================ //

const SingleTrack = ({ tracks, edit, deleteTrack }) => {
  // get the params from the url
  const params = useParams()
  const id = parseInt(params.id)
  
  // find the track the user wants to see based on the param 
  const track = tracks.find((t) => t.id === id)
  // console.log(track)
  
  return (
    <div className="single-track">
      <div className="left">
        <img src={track?.albumCover} alt="Album Cover" />
        <h2>{track?.album}</h2>
      </div>
      
      <div className="right">
        <h1>{track?.title}</h1>
        <h2>{track?.artist}</h2>
        <h3><FaMusic className="icon" />{track?.genre}</h3>
        <audio src={track?.mp3Url} controls>
          Your browser is unsupported
        </audio> <br />

        <div className="buttons-container">
          <Link to="/">
          <button><FaArrowLeft /></button>
          </Link>
          <button onClick={() => edit(track)}>Edit</button>
          <button className="delete-btn" onClick={() => deleteTrack(track)}>Delete</button>
        </div>
      </div>
      
    </div>
  )
}

export default SingleTrack
