import React from 'react'

import Banner from '../components/Banner'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Join from '../components/Join'
import Meet from '../components/Meet'
import Places from '../components/Places'
import Stays from '../components/Stays'
import "../Responsive.css"

const Home = () => {
    return (
        <>
            <Header page="home" />
            <Banner />
            <Places />
            <Stays />
            <Meet />
            <Join />
            <Footer />
        </>
    )
}

export default Home
