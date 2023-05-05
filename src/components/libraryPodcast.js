import React from "react";
import { playAudio } from "../util";

const LibraryPodcast = ({podcast, podcasts, setCurrentPodcast, id, audioRef, isPlaying, setPodcasts}) => {

    const podcastSelectHandler = () => {
        setCurrentPodcast(podcast);
        //Set active state
        const newPodcasts = podcasts.map((podcast) => {
            if(podcast.id === id){
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

       playAudio(isPlaying, audioRef);    
    };
    
    return(
        <div onClick={podcastSelectHandler} className={`library-podcast ${podcast.active ? 'selected' : ""}`}>
            <img src={podcast.cover} alt="Album Cover"/>
            <div className="podcast-description">
                <h3>{podcast.name}</h3>
                <h4>{podcast.artist}</h4>
            </div>
        </div>
    );
};

export default LibraryPodcast;