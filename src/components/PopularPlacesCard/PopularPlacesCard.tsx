import React from 'react'

import johorJpg from "../../assets/img/explore/popular_place.jpg";
import johorWebp from "../../assets/img/explore/popular_place.webp";
import singaporeJpg from "../../assets/img/explore/popular_place2.jpg";
import singaporeWebp from "../../assets/img/explore/popular_place2.webp";

interface PlaceDetails {
    placeName: string
}

function PopularPlacesCard(props: PlaceDetails) {
    return (
        <>
            <div className="col4">
                {/* <img src="./img/explore/popular_place.webp" type="image/webp" className="lazyload" width="80" height="80" alt="Johor Bahru" /> */}
                <picture>
                    <source srcSet={props.placeName === "Singapore" ? singaporeWebp : johorWebp } type="image/webp" />
                    <img data-src={props.placeName === "Singapore" ? singaporeJpg : johorJpg } className="lazyload" width="80" height="80" alt="Johor Bahru" />
                </picture>
                <h3>{props.placeName}</h3>
            </div>
        </>
    )
}

export default PopularPlacesCard
