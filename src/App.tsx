import React from 'react'

const banner =  require("./assets/banner.jpg")

const App: React.FC = () =>  {
    return (
        <div>
            <h2>React app </h2>
            <img src={banner} width="100%" alt="banner image"/>
        </div>
    )
}

export default App


export function sum(a:number, b:number): number {
    return a + b;
}
