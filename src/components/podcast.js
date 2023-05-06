import React from "react";

const Podcast = ({currentPodcast}) => {
    return(
        <div className="podcast-container">
            <img className="podcast-playing" src={currentPodcast.cover} alt="Album Cover"/>
            <h2>{currentPodcast.name}</h2>
            <h3>{currentPodcast.artist}</h3>
        </div>
    );
};

export default Podcast;