const Zoom = () => {

    function adjustZoom() {
        const container = document.getElementById(styles.container);
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        container.style.zoom = Math.min(windowWidth / 1366, windowHeight / 768)*0.92;
    }
      
    useEffect(()=>{
        adjustZoom();
        window.onresize = adjustZoom;
    },[])

}

export default Zoom;