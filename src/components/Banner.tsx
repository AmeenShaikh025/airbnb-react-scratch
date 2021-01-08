import React from 'react'
import { Link } from "react-router-dom";

import "./Banner.css"

function Banner() {
    return (
        <section className="banner">
            <div className="banner__content">
                <h1>Go Near</h1>
                <Link to="/explore" className="btn btn__white">
                    Explore nearby stays
                </Link>
            </div>
        </section>
    )
}

export default Banner
