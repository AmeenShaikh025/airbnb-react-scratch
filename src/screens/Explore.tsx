import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PlacesNearBy from '../components/PlacesNearBy/PlacesNearBy'
import "../Responsive.css"

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
