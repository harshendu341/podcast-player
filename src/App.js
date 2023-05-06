import React, {useState, useRef} from "react";

import "./styles/app.scss";

import Player from "./components/player";
import Podcast from "./components/podcast";
import data from './data';
import Library from "./components/library";
import Nav from './components/nav';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [podcasts, setPodcasts] = useState(data());
  const [currentPodcast, setCurrentPodcast] = useState(podcasts[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [podcastInfo,setPodcastInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current=e.target.currentTime;
    const duration=e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round(100*(roundedCurrent/roundedDuration));

    setPodcastInfo({...podcastInfo, currentTime: current, duration, animationPercentage: animation,})
  };

  const podcastEndHandler = async () => {
    let currentIndex = podcasts.findIndex((podcast) => podcast.id === currentPodcast.id);
    await setCurrentPodcast(podcasts[(currentIndex+1) % podcasts.length]);
    if(isPlaying) audioRef.current.play();
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Podcast currentPodcast={currentPodcast} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentPodcast={currentPodcast}
        setPodcastInfo={setPodcastInfo}
        podcastInfo={podcastInfo}
        podcasts={podcasts}
        setCurrentPodcast={setCurrentPodcast}
        setPodcasts = {setPodcasts}
      />
      <Library audioRef={audioRef} podcasts={podcasts} setCurrentPodcast={setCurrentPodcast} isPlaying={isPlaying} setPodcasts={setPodcasts} libraryStatus={libraryStatus} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentPodcast.audio} onEnded={podcastEndHandler} ></audio>
    </div>
  );
}

export default App;
