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

                {/* First Place */}
                    <PlaceListHeader placeName="Bengaluru" />    
                    <PlaceList />
                {/* First Place */}

                
                {/* Second Place */}
                    <PlaceListHeader  placeName="Kuala Lumpur" />    
                    <PlaceList />
                {/* Second Place */}

                <PopularPlaces />             
            </div> 
        </>
    )
}

export default ExploreStays
