## Challenges
- just actually playing audio: I experimented with using Howler. I was able to get it work, but it wasn't perfect. I'd have to create a whole custom audio player in addition. That's why I just went with the audio tag. A whole audio controller is made for you, and it's a lot easier to use. 
- styling the audio player: figuring out how to grab the element
- using Cloudinary to store online mp3 links
- edit the entire schema to include the mp3 URL.... backend + frontend
- using Cloudinary and editing the schema, I no longer have to import audio files and manually add them individually in the frontend. Users can add them in the form (although they still have to illegally download and upload to cloudinary... )
  - there is definitely a program that can take, say, a youtube link, convert it to mp3, then upload to a service like cloudinary, but that is beyond me
- change my name to Mott Wire

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
- adding 'favorite' to the schema as an integer