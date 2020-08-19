import React, { useState, useEffect } from 'react'

export default function SearchInput(props) {
    const [search, setSearchVal] = useState('');

    useEffect(() => {
        setSearchVal(props.currSearch)
    }, [props.currSearch]);

    function handleChange(ev) {
        const { value } = ev.target;
        setSearchVal(value)
    }




    function onSearchSubmit(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        props.setSearch(search);
    }

    return (
        <section className="search-input">
            <form className="search-track flex aling-center space-between"
                onSubmit={onSearchSubmit}
            >
                <div className="input-container grow-1">
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Find me a track..."
                    />
                </div>
                <button className="search-icon-wrap flex align-center justify-center"
                >
                    <div className="search-icon">search</div>
                </button>
            </form>
        </section>
    )
}
