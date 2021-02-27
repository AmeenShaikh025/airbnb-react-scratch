import React from 'react'

import roomJpg from "../../assets/img/explore/room.jpg";
import roomWebp from "../../assets/img/explore/room.webp";

interface placeListImg {
    superHost: Boolean
}

function PlaceListCardImage(props: placeListImg) {
    return (
        <>
            <div className="card__img">
                {/* <img src="./img/explore/room.webp" type="image/webp" className="lazyload" width="100%" height="auto" alt="room" /> */}
                <picture>
                    <source srcSet={roomWebp} type="image/webp" />
                    <img data-src={roomJpg} className="lazyload" width="100%" height="auto" alt="room" />
                </picture>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" className="svg-inline--fa fa-arrow-alt-circle-left fa-w-16 left__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 right__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg>
                {props.superHost ? <button className="btn">superhost</button> : null}
            </div>
        </>
    )
}

export default PlaceListCardImage
