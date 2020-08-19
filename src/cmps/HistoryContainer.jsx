import React from 'react'



export default function HistoryContainer(props) {

    return (
        <section className='history-container'>
            <div className="history-title flex align-center">
                <div className="history-icon"></div>
                <div className="text">Search history</div>
            </div>
            {props.history && props.history.map((search, idx) => {
                return (
                    <button key={idx} className="history-row flex align-center"
                        onClick={(ev) => props.onSearchHistory(ev, search)}
                    >
                        <div className="search-grey-icon"></div>
                        <div>{search}</div>
                    </button>
                )
            })}
        </section>
    )
}
