import React, { useEffect } from 'react';
import { Zoom } from "../extra/zoom.js";
import Perfil from "../components/Perfil.jsx"

const Profile = () => {
  Zoom()

  return (
    <div id='container'>
      <Perfil id={window.location.href.substring(window.location.href.indexOf("=")+1)}/>
    </div>
  );
  
};

export default Profile;