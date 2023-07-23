import "./App.css";
import Header from "./components/Header";
import MusicCards from "./components/MusicCards";
import Musics from "./musics.js";
import MusicPlayer from "./components/MusicPlayer";
import { useEffect, useState, useRef } from "react";

function App() {
  const audioPlaying = useRef();

  const [musics, setMusics] = useState([...Musics]);
  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState("");

  useEffect(() => {
    if (playing) {
      audioPlaying.current.play();
    } else {
      audioPlaying.current.pause();
    }
  }, [playing]);

  return (
    <div className="container">
      <Header />
      <hr />
      <div className="container-main">
        <h2>The best playlist</h2>
        <hr />
        <div className="container-music-card">
          {musics.map((music) => (
            <MusicCards
              key={music.id}
              music={music}
              setCurrentMusic={setCurrentMusic}
              setPlaying={setPlaying}
              audioPlaying={audioPlaying}
            />
          ))}
        </div>
      </div>
      <MusicPlayer
        key={musics.id}
        musics={musics}
        playing={playing}
        setPlaying={setPlaying}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        audioPlaying={audioPlaying}
      />
    </div>
  );
}

export default App;
