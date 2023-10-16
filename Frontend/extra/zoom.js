import { useEffect } from 'react';

const adjustZoom = () => {
    const container = document.getElementById('container');
    const windowWidth = window.innerWidth;
    console.log(windowWidth)
    const windowHeight = window.innerHeight;
    console.log(windowHeight)
    container.style.zoom = Math.min(windowWidth / 1325, windowHeight / 619) * 0.91;
}

export const Zoom = () => {
    useEffect(()=>{
        adjustZoom();
        window.onresize = adjustZoom;
    },[])
}