import React from 'react'

import PlacesFilter from '../PlaceFilter/PlacesFilter'
import PlaceList from '../PlaceList/PlaceList'
import PlaceListHeader from '../PlaceListHeader/PlaceListHeader'
import PopularPlaces from '../PopularPlaces/PopularPlaces'

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
