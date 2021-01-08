import React from 'react'

interface CardDetails {
    ImageWebp: string,
    ImageJpg: string,
    title: string,
    cardFor: string
}

import Card from './Card';
import "./CardList.css";

function Stays(props: CardDetails) {
    return (
        <>
            <section className="card__section">
                <div className={`container-fluid ${props.cardFor === "stays" ? "pt0" : "" }`}>
                    <h2>{props.title}</h2>
                    <div className="row">
                        <Card ImageJpg={props.ImageJpg} ImageWebp={props.ImageWebp} />
                        <Card ImageJpg={props.ImageJpg} ImageWebp={props.ImageWebp} />
                        <Card ImageJpg={props.ImageJpg} ImageWebp={props.ImageWebp} />
                        <Card ImageJpg={props.ImageJpg} ImageWebp={props.ImageWebp} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stays
