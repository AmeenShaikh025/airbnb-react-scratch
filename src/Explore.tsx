import React from 'react'

import Footer from './Footer'
import Header from './Header'
import PlacesNearBy from './PlacesNearBy'

const Explore = () => {
    return (
        <>
            <Header page="explore" />
            <PlacesNearBy />
            <Footer />
        </>
    )
}

export default Explore
