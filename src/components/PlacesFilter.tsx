import React from 'react'

function PlacesFilter() {
    return (
        <>
            <p>300+ stays</p>
            <h2>Stays in selected map area</h2>
            <div className="row">
                <div className="col12">
                    <button className="btn btn-filter">
                        Cancellation flexibility
                    </button>
                    <button className="btn btn-filter">
                        Type of place
                    </button>
                    <button className="btn btn-filter">
                        Price
                    </button>
                    <button className="btn btn-filter">
                        Instant book
                    </button>
                    <button className="btn btn-filter">
                        More filters
                    </button>
                </div>
            </div>
        </>
    )
}

export default PlacesFilter
