import { useEffect } from 'react';

let w, h;

const adjustZoom = () => {
    const container = document.getElementById('container');
    if (container) {
        container.style.zoom = Math.min(window.innerWidth / w, window.innerHeight / h) * (window.location.pathname === '/eliminar-cuenta' ? 1.21 : 0.91);
    }
}

const PantallasIniciales = () => {
    if(window.location.pathname==='/' || window.location.pathname==='/crear-cuenta' || window.location.pathname==='/iniciar-sesion'){
        return true;
    }else{
        return false;
    }
}

export const Zoom = () => {  
    useEffect(()=>{
        if(PantallasIniciales()){
            if(window.localStorage.token!==undefined && window.localStorage.token!==null){
                window.location.pathname = '/menu';
                return;
            }
        }else if(window.localStorage.token===undefined || window.localStorage.token===null){
            window.location.pathname = '/iniciar-sesion';
            return;
        }
        w = window.innerWidth;
        h = window.innerHeight;
        adjustZoom();
        
        window.addEventListener('resize', adjustZoom);
        return () => {
        // Limpia el evento de redimensionamiento cuando el componente se desmonta
        window.removeEventListener('resize', adjustZoom);
        };
        
        // Suscribirse al evento popstate cuando el componente se monta
        //window.addEventListener('popstate', Inicio);
        
        // Limpiar el evento cuando el componente se desmonta
        //return () => {
            //window.removeEventListener('popstate', Inicio);
        //};
    },[])
}