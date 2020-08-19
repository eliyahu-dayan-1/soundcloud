import React from 'react'
import {Link } from 'react-router-dom'

export default function Navbar(props) {


    return (
        <header className="flex align-center">
            <Link to="/" >
                <div className="soundcloud-icon"></div>
            </Link>
        </header>
    )
}
