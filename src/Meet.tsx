import React from 'react'

import "./Meet.css"
import ImageJpg from "./assets/img/home/live.jpg";
import MeetOne from "./assets/img/home/meet1.webp";
import MeetTwo from "./assets/img/home/meet2.webp";
import MeetThree from "./assets/img/home/meet3.webp";
import MeetFour from "./assets/img/home/meet4.webp";

function Meet() {
    return (
        <>
           <section className="meet">
                <div className="container-fluid">
                    <div className="meet__header">
                        <div className="meet__header__content">
                            <h2>
                                Meet Online Experiences
                            </h2>
                            <p>
                                Interactive activities you can do together, led by expert hosts.
                            </p>
                        </div>
                        <button className="btn btn-dark">
                            Explore &nbsp;
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col6">
                            <picture>
                                <source srcSet={MeetOne} type="image/webp" />
                                <img data-src={ImageJpg} className="lazyload" width="auto" height="auto" alt="meet1" />
                            </picture>
                            {/* <img data-src="./img/home/meet1.webp" type="image/webp" className="lazyload" width="auto" height="auto" alt="meet1" /> */}
                            <div className="meet__content">
                                <div>
                                    Learn to make soup dumplings in Shanghai
                                </div>
                            </div>
                        </div>
                        <div className="col6">
                            <div className="row">
                                <div className="col6">
                                    <picture>
                                        <source srcSet={MeetThree} type="image/webp" />
                                        <img data-src={ImageJpg} className="lazyload" width="auto" height="auto" alt="meet3" />
                                    </picture>
                                    <div className="meet__content">
                                        <div>
                                            Learn to make soup dumplings in Shanghai
                                        </div>
                                    </div>
                                </div>
                                <div className="col6">
                                <picture>
                                        <source srcSet={MeetFour} type="image/webp" />
                                        <img data-src={ImageJpg} className="lazyload" width="auto" height="auto" alt="meet4" />
                                    </picture>
                                    <div className="meet__content">
                                        <div>
                                            Learn to make soup dumplings in Shanghai
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col12 d-none d-md-none">
                                    <picture>
                                        <source srcSet={MeetTwo} type="image/webp" />
                                        <img data-src={ImageJpg} className="lazyload" width="auto" height="auto" alt="meet2" />
                                    </picture>
                                <div className="meet__content">
                                    <div>
                                        Learn to make soup dumplings in Shanghai
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Meet
