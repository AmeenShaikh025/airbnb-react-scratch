import React from 'react'

import PlacesFilter from './PlacesFilter'
import PlaceList from './PlaceList'
import PlaceListHeader from './PlaceListHeader'
import PopularPlaces from './PopularPlaces'

function ExploreStays() {
    return (
        <>
            <div className="col7 explore__cards">
                <PlacesFilter />

                    <PlaceListHeader placeName="Bengaluru" />    
                    <PlaceList />

                    <PlaceListHeader  placeName="Kuala Lumpur" />    
                    <PlaceList />

                <PopularPlaces />             
            </div> 
        </>
    )
}

export default ExploreStays
