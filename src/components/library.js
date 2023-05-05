import React from "react";
import LibraryPodcast from "./libraryPodcast";

const Library = ({podcast, podcasts, setCurrentPodcast, audioRef, isPlaying, setPodcasts, libraryStatus}) => {
    console.log(podcasts);
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-podcasts">
                {podcasts.map(podcast => (
                    <LibraryPodcast podcasts={podcasts} podcast={podcast} setCurrentPodcast={setCurrentPodcast} isPlaying={isPlaying} key={podcast.id} id={podcast.id} setPodcasts={setPodcasts} audioRef={audioRef} />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Library;