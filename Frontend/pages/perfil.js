import React, { useEffect } from 'react';
import { Zoom } from "../extra/zoom.js";
import Perfil from "../components/Perfil.jsx"

const Profile = () => {
  Zoom()

  let aux;
  useEffect(() => {
    aux = window.location.href.substring(window.location.href.indexOf("=")+1);
  })

  return (
    <div id='container'>
      { aux!==null && <Perfil id={aux}/> }
    </div>
  );
  
};

export default Profile;