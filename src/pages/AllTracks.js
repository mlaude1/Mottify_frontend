import React, { useState } from 'react'
import Track from '../components/Track'
import { GoSearch } from 'react-icons/go'

const AllTracks = (props) => {
  
  const [searchValue, setSearchValue] = useState("")

  // for each track in the array, render a track component
  return (
    <section>
      <div className="inputWithIcon">
        <GoSearch class="search-icon" />
        <input type="search" placeholder="Songs, sounds, or artists" onChange={(event) => setSearchValue(event.target.value)} />
      </div>

      <div className="tracks-container">
      {props.tracks.filter((track) => {
        if (searchValue === "") return track
        else if (track.title.toLowerCase().includes(searchValue.toLowerCase())) return track
        else if (track.artist.toLowerCase().includes(searchValue.toLowerCase())) return track
      })
      .map((track) => {
        return <Track key={track.id} track={track} />
      })}
    </div>
    </section>
  ) 
}

export default AllTracks
