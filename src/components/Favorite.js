import React, { useState } from 'react'
import  { AiFillHeart } from "react-icons/ai"

const Favorite = (props) => {

  const [fave, setFave] = useState(false)

  const toggle = () => {
    setFave(!fave)
  }

  return (
    <div className="favorite-button">
      {[ ...Array(1)].map((heart, i) => {

        return <label>
          <input 
            type="radio"
            name="favorite"
            onClick={toggle}
            onChange={props.handleChange}
          />
          <AiFillHeart 
            id="heart-icon"
            size={25}
            color={fave == true ? "#ff5666" : "#e4e5e9"}
          />
        </label>
      })}
    </div>
  )
}

export default Favorite;
