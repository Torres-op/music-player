import "./styles.css";
import Play from "../../assets/play.svg";
import Pause from "../../assets/pause.svg";
import Stop from "../../assets/stop.svg";
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";

export default function MusicPlayer({
  musics,
  audioPlaying,
  currentMusic,
  setCurrentMusic,
  playing,
  setPlaying,
}) {
  const PlayPause = () => {
    setPlaying(!playing);
  };

  const SkipMusic = () => {
    const index = musics.findIndex((music) => music.id === currentMusic.id);

    if (index === musics.length - 1) {
      setCurrentMusic(musics[0]);
    } else {
      setCurrentMusic(musics[index + 1]);
    }
    setPlaying(true);
  };

  const PreviousMusic = () => {
    const index = musics.findIndex((music) => music.id === currentMusic.id);

    if (index === 0) {
      setCurrentMusic(musics[musics.length - 1]);
    } else {
      setCurrentMusic(musics[index - 1]);
    }
    setPlaying(true);
  };

  const StopMusic = () => {
    audioPlaying.current.pause();
    audioPlaying.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <footer>
      <div className="music-informations">
        <h2 className="music-title">{currentMusic.title}</h2>
        <span className="music-artist">{currentMusic.artist}</span>
      </div>
      <div className="music-player">
        <audio src={currentMusic.url} ref={audioPlaying} />
        <div className="music-player-buttons">
          <button className="stop-button" type="button" onClick={StopMusic}>
            <img src={Stop} alt="Botão de parar a música" />
          </button>
          <button
            className="previous-button"
            type="button"
            onClick={PreviousMusic}>
            <img src={Previous} alt="Botão de voltar para a música anterior" />
          </button>
          <button
            className="play-pause-button"
            type="button"
            onClick={PlayPause}>
            {playing ? (
              <img src={Pause} alt="Botão de play" />
            ) : (
              <img src={Play} alt="Botão de pause" />
            )}
          </button>
          <button className="next-button" type="button" onClick={SkipMusic}>
            <img src={Next} alt="Botão de ir para a próxima música" />
          </button>
        </div>
        <div className="progress-bar">
          <div>00:00</div>
          <progress value="0" max="100"></progress>
          <div>00:00</div>
        </div>
      </div>
    </footer>
  );
}
