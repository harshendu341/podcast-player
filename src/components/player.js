import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef, currentPodcast, isPlaying, setIsPlaying, setPodcastInfo, podcastInfo, podcasts, setCurrentPodcast, setPodcasts }) => {
    
    useEffect(() => {
        const newPodcasts = podcasts.map((podcast) => {
            if(podcast.id === currentPodcast.id){
                return {
                    ...podcast,
                    active : true,
                };
            }
            else {
                return {
                    ...podcast,
                    active: false,
                };
            }
        });
        setPodcasts(newPodcasts); 
    }, [currentPodcast]);

    //Event Handlers
    const playPodcastHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0"+ Math.floor(time%60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setPodcastInfo({...podcastInfo, currentTime: e.target.value});
    };

    const skipTrackHandler = async (direction) => {
        let currentIndex = podcasts.findIndex((podcast) => podcast.id === currentPodcast.id);
        if(direction === 'skip-forward') {
            await setCurrentPodcast(podcasts[(currentIndex+1) % podcasts.length]);
        }
        if(direction === 'skip-back') {
            if((currentIndex - 1)%podcasts.length === -1){
                await setCurrentPodcast(podcasts[podcasts.length -1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentPodcast(podcasts[(currentIndex-1) % podcasts.length]);
        }
        if(isPlaying) audioRef.current.play();
    };

    //Add styles
    const trackAnim = {
        transform: `translateX(${podcastInfo.animationPercentage}%)`
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(podcastInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentPodcast.color[0]},${currentPodcast.color[1]})`}} className="track">
                    <input 
                            min={0} 
                            max={podcastInfo.duration || 0}
                            onChange={dragHandler} 
                            value={podcastInfo.currentTime} 
                            type="range"
                    />
                    <div style={trackAnim} className="animate-track">
                    
                    </div>
                </div>
                
                <p>{podcastInfo.duration ? getTime(podcastInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playPodcastHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    );
};

export default Player;