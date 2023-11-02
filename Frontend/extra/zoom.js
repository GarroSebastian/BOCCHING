import { useEffect } from 'react';

let w, h;

const adjustZoom = () => {
    const container = document.getElementById('container');
    container.style.zoom = Math.min(window.innerWidth / w, window.innerHeight / h) * 0.91;
}

export const Zoom = () => {  
    useEffect(()=>{
        w = window.innerWidth;
        h = window.innerHeight;
        adjustZoom();
        window.onresize = adjustZoom;
    },[])
}