import React from 'react'

function PlacesFilter() {
    return (
        <>
            <div title="placeFilter">
                <p>300+ stays</p>
                <h2>Stays in selected map area</h2>
                <div className="row">
                    <div className="col12" id="filter-buttons">
                        <button data-testid="cancel-flexibility" className="btn btn-filter">
                            Cancellation flexibility
                        </button>
                        <button data-testid="type-of-place" className="btn btn-filter">
                            Type of place
                        </button>
                        <button data-testid="price" className="btn btn-filter">
                            Price
                        </button>
                        <button data-testid="instant-book" className="btn btn-filter">
                            Instant book
                        </button>
                        <button data-testid="more-filters" className="btn btn-filter">
                            More filters
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlacesFilter
