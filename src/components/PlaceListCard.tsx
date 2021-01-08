import React from 'react'
import PlaceListCardDetails from './PlaceListCardDetails'

import PlaceListCardImage from './PlaceListCardImage'
import PlaceListHeader from './PlaceListHeader'

function PlaceListCard() {
    return (
        <>
            <div className="row explore__card">
                <div className="col4">
                    <PlaceListCardImage superHost={true} />
                    <PlaceListCardDetails />
                </div>
                <div className="col4">
                    <PlaceListCardImage  superHost={false} />
                    <PlaceListCardDetails />        
                </div>

                <div className="col4">
                    <PlaceListCardImage  superHost={true} />
                    <PlaceListCardDetails /> 
                </div>
            </div>
        </>
    )
}

export default PlaceListCard
