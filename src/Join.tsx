import React from 'react'

import CardList from './CardList'
import ImageJpg from "./assets/img/home/live.jpg";
import ImageWebp from "./assets/img/home/live.webp";

function Join() {
    return (
        <>
            <CardList cardFor="join" title="Join millions of hosts on Airbnb" ImageJpg={ImageJpg} ImageWebp={ImageWebp} />
        </>
    )
}

export default Join
