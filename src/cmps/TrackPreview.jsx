import React from 'react';
import moment from 'moment';
import equlizerImg from '../assets/imgs/equlizer.jpg'

export default function TrackPreview({ track, displayMode }) {
    return (
        <>
            {displayMode === 'tile' && <img src={track.artwork_url || equlizerImg}
                onError={(e) => { e.target.onerror = null; e.target.src = equlizerImg }}
                alt=""
            />}
            <div className="cut-text">{track.title} </div>
            <div className="properties flex column">
                <div className="flex">
                    <div className="clock-icon"></div>
                    <div>{moment(track.duration).format('mm:ss')}</div>
                </div>
                {track.genre && <div className="flex">
                    <div className="genre-icon"></div>
                    <div>{track.genre}</div>
                </div>}
            </div>
        </>)
}
