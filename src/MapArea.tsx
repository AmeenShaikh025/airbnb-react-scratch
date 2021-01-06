import React, { useState, useEffect } from 'react'

let source = '';

function iFrame(src: string) {
    // console.log('map url',src)
    source = source + src;
    console.log('src is',source)
    return {__html: iFrameURL};
}


const iFrameURL = `<iframe title="map" src="${source}" name="map" id="map" loading="lazy" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;

console.log('outside ',source)
console.log(iFrameURL);

function MapArea() {
    
    const [url, setUrl] = useState(''); 
    const [src,setSrc] = useState('');

    useEffect(() => {
        setUrl('https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3415558.652907079!2d77.37909911729892!3d15.01010069536179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1606193713215!5m2!1sen!2sin');
    }, []);

    return (
        <>
            <div dangerouslySetInnerHTML={iFrame(url)} />
        </>
    )
}

export default MapArea
