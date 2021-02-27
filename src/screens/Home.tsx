import React from 'react'

import Banner from '../components/Banner/Banner'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Join from '../components/JoinSection/Join'
import Meet from '../components/MeetSection/Meet'
import Places from '../components/Places/Places'
import Stays from '../components/Stays/Stays'
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
