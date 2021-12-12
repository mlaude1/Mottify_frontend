import React, { useState } from 'react'
import  { AiFillHeart } from "react-icons/ai"

const Favorite = (props) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div className="favorite-button">
      {[ ...Array(1)].map((heart, i) => {
        const ratingValue = i + 1

        return <label>
          <input 
          type="radio"
          name="favorite"
          value={ratingValue}
          onClick={() => setRating(ratingValue)} 
          onChange={props.handleChange}
          />
          <AiFillHeart 
          id="heart-icon"
          size={25}
          color={ratingValue <= (hover || rating) ? "#ff5666" : "#e4e5e9"}
          onMouseEnter={() => setHover(ratingValue)} 
          onMouseLeave={() => setHover(null)}
          />
          </label>
      })}
    </div>
  )
}

export default Favorite;
