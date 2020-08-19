import React, { useState, useEffect } from 'react'
import { storageService } from '../services/storage.service.js'
import { eventBus } from '../services/eventBus.service.js'
import SearchContainer from '../cmps/SearchContainer'
import HistoryContainer from '../cmps/HistoryContainer'
import TrackPreviewContainer from '../cmps/TrackPreviewContainer'

export default function TrackApp() {
    const SEARCH = "recentSearchs"


    const [currTrack, setTrack] = useState(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        setHistory(storageService.loadFromStorage(SEARCH))
    }, []);


    function onSearchUpdateHistory(search) {
        let recentSearchs = storageService.loadFromStorage(SEARCH) || [];
        if (recentSearchs && recentSearchs.length >= 5) recentSearchs.pop();
        recentSearchs.unshift(search);
        storageService.storeToStorage(SEARCH, recentSearchs);
        setHistory(recentSearchs);
    }

    function onSearchHistory(ev, search) {
        ev.preventDefault()
        eventBus.emit('search-history', search)
    }

    function trackClicked(track) {
        setTrack(track)
    }

    return (
        <main className="main-track-app">
            <SearchContainer trackClicked={trackClicked} onSearchUpdateHistory={onSearchUpdateHistory} />
            <TrackPreviewContainer currTrack={currTrack} />
            <HistoryContainer history={history} onSearchHistory={onSearchHistory} />
        </main>
    )
}
