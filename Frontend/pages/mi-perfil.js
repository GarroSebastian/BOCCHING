import { Zoom } from "../extra/zoom.js";
import Perfil from "../components/Perfil.jsx"

const MiPerfil = () => { 
  Zoom()
  
  return (
    <div id='container'>
      <Perfil miPerfil={false}/>
    </div>
  );
  
};

export default MiPerfil;