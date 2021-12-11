// Import Components
import Form from "./pages/Form";
import AllTracks from "./pages/AllTracks";
import SingleTrack from "./pages/SingleTrack";

import Valentine from "./audio/Valentine.mp3"

// Import Hooks
import { useState, useEffect } from "react"

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom"

function App() {
  
  ////////////////////////
  // State and Other Variables 
  ////////////////////////

  const navigate = useNavigate()

  const url = "https://mlaude-mottify-backend.herokuapp.com/track/";

  // state to hold list of tracks
  const [tracks, setTracks] = useState([]);
  
  // an empty track for initializing the create form
  const nullTrack = {
    title: "",
    artist: "",
    album: "",
    albumCover: "",
    genre: "",
    trackLength: ""
  }

  const [targetTrack, setTargetTrack] = useState(nullTrack)

  ////////////////////////
  // Functions
  ////////////////////////
  // function to get list of tracks from API
  const getTracks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTracks(data);
  };

  // function to add tracks
  const addTracks = async (newTrack) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrack)
    });
    // update the list of tracks
    getTracks()
  };

  // function to edit a track
  const getTargetTrack = (track) => {
    setTargetTrack(track);
    navigate("/edit")
  };

  // function to update a track
  const updateTrack = async (track) => {
    await fetch(url + track.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(track)
    });
    // update the list
    getTracks()
  };

  // function to delete a track
  const deleteTrack = async (track) => {
    await fetch(url + track.id, {
      method: "delete"
    });
    // update the list
    getTracks()
    navigate("/")
  };

  ////////////////////////
  // useEffects
  ////////////////////////
  useEffect(() => {
    getTracks()
  }, [])


  ////////////////////////
  // Returned JSX
  ////////////////////////

  return (
    <div className="App">
      <h1>Mottify Home</h1>
      <Link to="/new"><button>Add a Song</button></Link>
      <Routes>
        <Route path="/" element={<AllTracks tracks={tracks} />}/>
        <Route path="/track/:id" element={<SingleTrack
          tracks={tracks}
          edit={getTargetTrack}
          deleteTrack={deleteTrack}
        />}/>
        <Route path="/new" element={<Form
          initialTrack={nullTrack}
          handleSubmit={addTracks}
          buttonLabel="Add"
        />}/>
        <Route path="/edit" element={<Form
          initialTrack={targetTrack}
          handleSubmit={updateTrack}
          buttonLabel="Update"
        />}/>
      </Routes>

      <audio src="https://res.cloudinary.com/asianboymandude/video/upload/v1639236014/Valentine_kgkfri.mp3"controls>
        {/* <source src={Valentine} /> */}
        {/* <source src="https://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3" /> */}
        Your browser is unsupported
      </audio>

    </div>
  );
}

export default App;
