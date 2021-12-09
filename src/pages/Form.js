import { useState } from "react"
import { useNavigate } from "react-router"


const Form = ({ initialTrack, handleSubmit, buttonLabel }) => {
  
  const navigate = useNavigate()
  
  // The Form State
  const [formData, setFormData] = useState(initialTrack)

  // HandleChange to update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form is submitted
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function as props
    handleSubmit(formData)
    // return the user to Index
    navigate("/")
  }

  return <form onSubmit={handleSubmission}>
    <input 
      type="text"
      onChange={handleChange}
      value={formData.title}
      name="title"
      placeholder="Title"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.artist}
      name="artist"
      placeholder="Artist"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.album}
      name="album"
      placeholder="Album"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.albumCover}
      name="albumCover"
      placeholder="Album Cover"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.genre}
      name="genre"
      placeholder="Genre"
    />
    <input 
      type="text"
      onChange={handleChange}
      value={formData.trackLength}
      name="trackLength"
      placeholder="Track Length"
    />
    <input type="submit" value={buttonLabel} />
  </form>


};

export default Form
