import React, { useEffect, useState } from 'react'
import equlizerImg from '../assets/imgs/equlizer.jpg' // relative path to image 
import moment from 'moment';


export default function TrackPreviewContainer(props) {

    const [displayEmbed, setDisplayEmbed] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);


    useEffect(() => {
        setDisplayEmbed(false)
        setFadeIn(true)
    }, [props.currTrack]);

    function playTrack(ev) {
        setDisplayEmbed(true)
    }

    const { currTrack } = props;


    if (!currTrack) return (<main className="track-preview flex align-center justify-center">
        <div className="soundcloud-grey-icon"></div>
    </main>);
    else return (
        <main className={`track-preview ${(fadeIn)? 'fade-in': ''} grow-1 flex column`}
        onAnimationEnd={() => setFadeIn(false)}

        >
            <div className="flex column align-center justify-center">
                <button className={`track-tile flex column`}
                    onClick={playTrack}
                >
                    <img src={currTrack.artwork_url || equlizerImg}
                        onError={(e) => { e.target.onerror = null; e.target.src = equlizerImg }}
                        alt=""
                    />
                    <div className="cut-text">{currTrack.title} </div>
                    <div className="properties flex column">
                        <div className="flex">
                            <div className="clock-icon"></div>
                            <div>{moment(currTrack.duration).format('mm:ss')}</div>
                        </div>
                        {currTrack.genre && <div className="flex">
                            <div className="genre-icon"></div>
                            <div>{currTrack.genre}</div>
                        </div>}
                    </div>
                </button>

                {displayEmbed && <iframe title={currTrack.title} width="100%" height="200px" scrolling="no" frameBorder="no" allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${currTrack.id}&amp;auto_play=true`}>
                </iframe>}

            </div>
        </main>
    )
}
