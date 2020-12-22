import React from 'react'

import banner from "./assets/banner.jpg";
// const banner =  require("./assets/banner.jpg")

function App() {
    return (
        <div>
            <h2>React app </h2>
            <img src={banner} width="100%" alt="banner image"/>
        </div>
    )
}

export default App

