import React from 'react'
import PopularPlacesCard from '../PopularPlacesCard/PopularPlacesCard'

import PopularPlacesHeader from '../PopularPlacesHeader/PopularPlacesHeader'

function PopularPlaces() {
    return (
        <>
            <PopularPlacesHeader />
            <div className="row popular__places">
                <PopularPlacesCard placeName="Johor Bahru" />
                <PopularPlacesCard placeName="Singapore" />
                <PopularPlacesCard placeName="Johor Bahru" />
                <PopularPlacesCard placeName="Johor Bahru" />
                <PopularPlacesCard placeName="Singapore" />
                <PopularPlacesCard placeName="Johor Bahru" />
            </div>
        </>
    )
}

export default PopularPlaces