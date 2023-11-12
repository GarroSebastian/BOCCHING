import { useEffect } from 'react';

let w, h;

const adjustZoom = () => {
    const container = document.getElementById('container');
    container.style.zoom = Math.min(window.innerWidth / w, window.innerHeight / h) * (window.location.pathname==='/eliminar-cuenta' ? 1.21 : 0.91);
}

const PantallasIniciales = () => {
    if(window.location.pathname==='/' || window.location.pathname==='/crear-cuenta' || window.location.pathname==='/iniciar-sesion'){
        return true;
    }else{
        return false;
    }
}

const Inicio = () => {
    if(PantallasIniciales() || (!PantallasIniciales() && window.localStorage.getItem("token")!==null)){
        w = window.innerWidth;
        h = window.innerHeight;
        adjustZoom();
        window.onresize = adjustZoom;
    }else{
        window.location.pathname = '/iniciar-sesion';
    }
}

export const Zoom = () => {  
    useEffect(()=>{
        w = window.innerWidth;
        h = window.innerHeight;
        adjustZoom();
        window.onresize = adjustZoom;
        /*Inicio();
        // Suscribirse al evento popstate cuando el componente se monta
        window.addEventListener('popstate', Inicio);
        
        // Limpiar el evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('popstate', Inicio);
        };*/
    },[])
}