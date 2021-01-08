import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import PlacesNearBy from '../components/PlacesNearBy'
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
