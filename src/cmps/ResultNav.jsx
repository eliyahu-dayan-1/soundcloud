import React from 'react'

export default function ResultNav(props) {
    return (
        <div>
            <div className="result-nav flex align-center space-between">
                <div className="pagination flex">
                    <button className={(props.currPage === 1) ? "hidden" : ''} onClick={() => props.changePagination(-1)}>
                        <div className="back-icon" ></div>
                    </button>

                    <div className="curr-page">{props.currPage}</div>

                    <button className={(props.isNextHerf) ? '' : 'hidden'} onClick={() => props.changePagination(1)}>
                        <div className="next-icon" ></div>
                    </button>

                </div>

                <div className="list-mode flex">
                    <button onClick={() => props.changeDisplayMode('list')}>
                        <div className="list-icon"></div>
                    </button>
                    <button onClick={() => props.changeDisplayMode('tile')}>
                        <div className="tile-icon"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
