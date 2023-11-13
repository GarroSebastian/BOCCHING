import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin12.module.css";
import { Zoom } from "../extra/zoom.js";
import { useState } from "react";
import axios from 'axios';

const eliminar_Cuenta = () => {
  Zoom()
  const router = useRouter();
  //Guardar datos de forma "especial", lo ve como un objeto
  //Contra Antigua
  const [codigoCofirmacion, setcodigoCofirmacion] = useState("");
const handleDeleteAccount = () => {
  const token = localStorage.getItem('token'); // Obtener el token del Local Storage
  if (!token) {
    console.log('No se encontró el token en el Local Storage');
    return;
  }

  if (codigoCofirmacion) {
    // Configura los encabezados con el token de autorización
    const headers = {
      Authorization: token,
    };

    // Realiza la solicitud GET para verificar el código de confirmación
    axios
      .get('http://localhost:3700/verify-delete-code/' + codigoCofirmacion, { headers })
      .then((response) => {
        //console.log('Response status:', response.status);
        //console.log('Response data:', response.data);
        if (response.status === 200 && response.data === "Cuenta eliminada exitosamente") {
          // El código de confirmación es correcto, la cuenta ha sido eliminada en el servidor
          alert('Tu cuenta ha sido eliminada exitosamente.');
          router.push('/');
        }
      })
      .catch((error) => {
        alert('Codigo de confirmacion Incorrecta')
        console.error('Error en la verificación del código de confirmación(1):', error);
      });
  } else {
    alert("ERROR: Debes ingresar el código de confirmación");
  }
};
  const onRectangleClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);



  const onCancelarTextClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  return (
    <div id="container">
    <div id={styles.container} className={styles.configuracin12}>
      <div className={styles.eliminarCuenta}>Eliminar cuenta</div>
      <div className={styles.configuracin12Child} onClick={onRectangleClick} />
      <div className={styles.configuracin12Item} onClick={handleDeleteAccount} />
      <div className={styles.configuracin12Inner} />
      <div className={styles.cdigoDeUsuario}>
      <input
onChange={(evt) => setcodigoCofirmacion(evt.target.value)}
placeholder="Código de confirmación"
/>      
</div>
        <div
          className={styles.eliminarCuenta1}
          onClick={handleDeleteAccount}
        >
          Eliminar Cuenta
        </div>
      <div className={styles.siEliminasTuContainer}>
        <p className={styles.siEliminasTu}>
          Si eliminas tu cuenta perderás todos los datos y historial registrado
        </p>
        <p className={styles.siEliminasTu}>
          a lo largo de tu estadía por Bocching sin opción a recupero.
        </p>
        <p className={styles.siEliminasTu}>&nbsp;</p>
        <p className={styles.siEliminasTu}>
          De estar consciente de la decisión, por motivos de seguridad te
          pediremos lo siguiente.
        </p>
      </div>
      <div className={styles.cancelar} onClick={onCancelarTextClick}>
        Cancelar
      </div>
      <div className={styles.ingreseSuCdigo}>
        Ingrese su codigo de Confirmacion
      </div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.transhumansMechanicalLove}
        alt=""
        src="/transhumans-mechanical-love@2x.png"
      />
      <div className={styles.txt01Parent}>
        <div className={styles.txt01}>Bocching</div>
        <div
          className={styles.rectangleWrapper}
          onClick={onFrameContainerClick}
        >
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default eliminar_Cuenta;
