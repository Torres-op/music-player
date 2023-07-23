import "./styles.css";

export default function MusicCards({
  music,
  setCurrentMusic,
  setPlaying,
  audioPlaying,
}) {
  const SelectSong = () => {
    setCurrentMusic(music);
    setPlaying(true);
    audioPlaying.current.autoplay = true;
  };

  return (
    <>
      <div className="music-cards" onClick={SelectSong}>
        <img src={music.cover} alt="Capa do album" />
        <span>{music.title}</span>
        <p>{music.description}</p>
      </div>
    </>
  );
}
