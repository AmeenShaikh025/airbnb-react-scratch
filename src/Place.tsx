import React from 'react'

interface PlaceDetails {
    gokarnaWebp: string,
    gokarnaJpg: string
}

function Place(props: PlaceDetails) {
    return (
        <>
            <div className="col3">
                {/* <img src={gokarnaJpg} className="lazyload" height="60" width="60" alt="Gokarna" /> */}
                <picture>
                    <source srcSet={props.gokarnaWebp} type="image/webp" />
                    <img data-src={props.gokarnaJpg} className="lazyload" height="60" width="60" alt="Gokarna" />
                </picture>
                <div className="place__details">
                    <h5>Gokarna</h5>
                    <p>6.5-hours drive</p>
                </div>
            </div>
        </>
    )
}

export default Place
