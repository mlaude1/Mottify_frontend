import React from 'react'
import Track from '../components/Track'


const AllTracks = (props) => {
  // for each track in the array, render a track component
  return (
    <div className="tracks-container">
      {props.tracks.map((track) => {
        return <Track key={track.id} track={track} />
      })}
    </div>
  ) 
}

export default AllTracks
