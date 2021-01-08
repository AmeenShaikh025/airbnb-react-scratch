import React from 'react'

import Place from './Place';
import "./Places.css";
import gokarnaJpg from "../assets/img/home/gokarna.jpg";
import gokarnaWebp from "../assets/img/home/gokarna.webp";


function Places() {
    return (
        <section className="places">
            <div className="container-fluid">
                <div className="row">
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                    <Place
                     gokarnaJpg={gokarnaJpg}
                     gokarnaWebp={gokarnaWebp} />
                </div>
            </div>
        </section>
    )
}

export default Places
