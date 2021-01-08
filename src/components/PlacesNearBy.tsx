import React from 'react'

import MapArea from './MapArea'
import ExploreStays from './ExploreStays'
import "./PlacesNearBy.css"

function PlacesNearBy() {
    return (
        <>
           <section className="explore margin__top">
                <div className="container">
                    <div className="row">
                        <ExploreStays />
                        <div className="col5">
                            {/* <MapArea /> */}
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default PlacesNearBy
