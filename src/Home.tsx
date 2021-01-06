import React from 'react'

import Banner from './Banner'
import Footer from "./Footer"
import Header from "./Header"
import Join from './Join'
import Meet from './Meet'
import Places from './Places'
import Stays from './Stays'

const Home = () => {
    return (
        <>
            <Header />
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
