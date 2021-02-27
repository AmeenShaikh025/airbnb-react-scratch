import React from 'react'

interface CardDetails {
    ImageWebp: string,
    ImageJpg: string
}

import "./Card.css"

function Card({ImageWebp, ImageJpg}: CardDetails) {
    return (
        <>
            <div title="card" className="col3">
                {/* <img data-src="./img/home/unique_stays.webp" type="image/webp" className="lazyload" width="100%" height="auto" alt="Unique stays" /> */}
                <picture>
                    <source srcSet={ImageWebp} type="image/webp" />
                    <img data-src={ImageJpg} className="lazyload" width="100%" height="auto" alt="Unique stays"/>
                </picture>
                <h4>Unique stays</h4>
            </div>
        </>
    )
}

export default Card
