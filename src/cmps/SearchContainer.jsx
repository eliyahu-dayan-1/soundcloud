import React, { useState, useEffect } from 'react'
import SearchInput from '../cmps/SearchInput'
import ResultList from './TrackList'
import ResultNav from '../cmps/ResultNav'
import { storageService } from '../services/storage.service.js'
import { eventBus } from '../services/eventBus.service.js'
import trackService from '../services/track.service.js'



export default function SearchContainer(props) {

    const DISPLAY_MODE = 'displayMode';
    const [displayMode, setDisplayMode] = useState('list');
    const [fadePage, setFadePage] = useState(false);
    const [currPage, setPagination] = useState(1);
    const [tracks, setTracks] = useState(null);
    const [isNextHerf, setIsNextHerf] = useState(false);
    const [currSearch, setCurrSearch] = useState('');
    
    useEffect(() => {
        const savedDisplayMode = storageService.loadFromStorage(DISPLAY_MODE);
        if (savedDisplayMode) setDisplayMode(savedDisplayMode);
        setTracksFunc()
        eventBus.on('search-history', (search) => {
            setCurrSearch(search)
        })
    }, []);

    useEffect(() => {
        setTracksFunc()
    }, [currSearch]);


    function setSearch(search) {
        setCurrSearch(search)
        props.onSearchUpdateHistory(search)
    }

    async function setTracksFunc() {
        const track = await trackService.query(currSearch, currPage)
        if(track.next_href) setIsNextHerf(true)
        else setIsNextHerf(false)
        setTracks(track.collection)
    }


    async function onTrackClick(trackId) {
        setFadePage(true);
        let track = tracks.find(t => t.id === trackId)
        if (!track) track = await trackService.gerTrack(trackId);
        props.trackClicked(track)
    }

    function changeDisplayMode(mode) {
        storageService.storeToStorage(DISPLAY_MODE, mode);
        setDisplayMode(mode);
    }

    function changePagination(changeTo) {
        const newPagination = currPage + changeTo;
        setPagination(newPagination)
        setTracksFunc()
        scrollToTop()
    }


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <section className="search-container flex column align-center space-between">
            <SearchInput setSearch={setSearch} currSearch={currSearch}/>
            <ResultList displayMode={displayMode} onTrackClick={onTrackClick} tracks={tracks} />
            <ResultNav changeDisplayMode={changeDisplayMode} changePagination={changePagination} setPagination={setPagination} currPage={currPage} isNextHerf={isNextHerf} />
        </section>
    )
}
