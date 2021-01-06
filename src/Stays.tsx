import React from 'react'

import CardList from './CardList'
import ImageJpg from "./assets/img/home/unique_stays.jpg";
import ImageWebp from "./assets/img/home/unique_stays.webp";

function Stays() {
    return (
        <CardList cardFor="stays" title="Live anywhere" ImageJpg={ImageJpg} ImageWebp={ImageWebp} />
    )
}

export default Stays
