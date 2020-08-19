import React from 'react'

import TrackPreview from './TrackPreview';



export default function TrackList(props) {
    if (!props.tracks || !props.tracks.length) return '';
    else return (
        <section className={`tracks-${props.displayMode} flex align-center column`}>
            {props.tracks.map(track => {
                return (
                    <button className={`track-${(props.displayMode === 'tile') ? 'tile' : 'row'} flex column`} key={track.id} onClick={() => props.onTrackClick(track.id)}>
                        <TrackPreview track={track} displayMode={props.displayMode}/>
                    </button>)
            })}
        </section>
    )
}