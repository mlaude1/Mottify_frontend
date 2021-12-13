# Mottify
#### By Matthew Laude

## Description
This project is a music app that allows user to add songs to their own personal library. The app has full CRUD functionality, allowing users to add, edit, and delete songs. Additional song details include the album cover, genre, and the ability to play the track. 

## Components
- Track
- AllTracks
- SingleTrack
- Form
- Favorite
- Modal
- App

## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all songs (index)||
| / | Index | post | posting a new song (create) |
| /songs/:id | Show | put | updating a song (update) |
| /songs/:id | Show | delete | delete a song (destroy) |

## React Component Architecture
```
-> App
  -> Header
  -> Main |state: songs|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: songs|
      -> Route |path="/songs/:id|
        -> Show |Props: songs, updateSong, deleteSong|
```

## User Stories
As a user, I can see a list of all my songs on the home page. \
As a user, I can click on a song, and all the details of the song will pop up \
As a user, I can add a song on the home page immediately \
As a user, I can delete songs from my library \
As a user, I can edit and update my currently existing songs \
As a user, I can play my my songs through an audio player 

## Technologies
Masonite, React, react-router-dom, react-icons, sass

## Bonus Features
**Search Filter** \
The search input on the index page allows the user to search for books based on the title or artist. The filter is case insensitive so tracks can be filtered out whether upper or lowercase letters are type. The way this feature works is by using state to store the value typed into the search filter. That value is then used in a `filter()` method which sorts through all of the tracks returned from the API call to see if their artist or title contains the search value. If they do, that data is mapped over and those tracks are displayed.

**Favorite Button** \
A favorite button allows the user to 'Like' a track by clicking on the Heart icon on the Index page. It is essentially an icon wrapped inside of a radio input (where the input has been hidden in the CSS). State is used to toggle a function that changes a boolean value. When the value is 'true', the Heart is colored red, if 'false' the heart is colored out. 

**Modal** \
A modal has been included. It is a simple modal in the form of instructions that pop up whenever the user clicks on the Question button. State is also used here with a function to toggle a boolean value. The value is set to 'True' when the modal is clicked and 'False' when it is closed. The instruction text is displayed on a div with a classname of "modal-content" and the blurred background is done with another div with a classname of "overlay". 

## Challenges
- just actually playing audio was tricky. First I experimented with using Howler. I was able to get it to work, but it wasn't perfect. I could create a button that would play sound when clicked on, but I'd have to create a whole custom audio controller in addition to it. That's why I just went with the audio tag. A whole audio controller is made for you, and it's a lot easier to use. 
- styling the audio player: figuring out how to grab the correct element. The HTML audio tag doesn't provide much in terms of custom designing, but I changed what I could 
- using Cloudinary to store online mp3 links. One of the most difficult parts of the process was figuring out where to store my audio. I needed my audio files to be mp3 links, and Cloudinary was the only service I could find that could host my mp3 files as links
- edit the entire schema to include the mp3 URL.... backend + frontend - needed to do a `craft migrate:rollback` to undo the migration, then edit both the model and seed file
- using Cloudinary and editing the schema, I no longer have to import audio files and manually add them individually in the frontend. Users can add them in the form (although they still have to download an mp3 and upload to Cloudinary... )
  - there is probably a way to program a function that will take, say, a youtube link, convert it to mp3, and then upload to a service like Cloudinary, but that is beyond me
- my app is called 'Mottify' as a bootleg version of 'Spotify'. However, my app more closely resembles LimeWire due to the sketchy nature of downloading mp3 files... but Mottify sounds better than MottWire

## Old vs New
- old method (would have to do this for each audio file...)

```
import Valentine from "./audio/Valentine.mp3"

<audio controls>
  <source src={Valentine} />
  <source src="https://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3" />
  Your browser is unsupported
</audio>
```

- new method (mp3 link is added in Form)
```
<audio src={track?.mp3Url} controls>
  Your browser is unsupported
</audio>
```

- looks like I don't need the trackLength anymore (removed display from Form and SingleTrack)
- adding 'favorite' to the schema as an integer (can't figure it out tho)
- styling, media queries for responsive, selecting elements
- adding a Search Filter
- adding a Modal - used this https://www.youtube.com/watch?v=9DwGahSqcEc as a reference
- attempting to fix favorite button (useState, toggle, change backend value to boolean)
  - was able to configure useState toggle to turn off heart, but still doesn't save on refresh
- for some reason, whenever Heroku times out and refreshes, my data reverts back to the seeder data
