import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin11.module.css";
import styles2 from "./configuracin2.module.css";
import { Zoom } from "../extra/zoom.js";
import { useState } from "react";
import usuariosApi from "../api/usuario.js";
import requestApi from "../api/solicitud.js";

const Configuracin11 = () => {
  const [pag, setPag] = useState(1);
  const [contraseaAntigua, setcontraseaAntigua] = useState("");
  const [contraseaNueva, setcontraseaNueva] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const defaultUSER = {
    nombres: '',
    apellidos: '',
    correo: '',
    genero: '',
    nacimiento: '',
    edad: 0,
    apodo: '',
    contrasena: '',
    foto: '',
    facultad: '',
    carrera: '',
    especialidad: '',
    descripcion: '',
    mostrarNombre: true,
    universidad: 'Universidad de Lima'
  };

  const [User, setUser] = useState(defaultUSER);
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/eliminar-cuenta");
  }, [router]);

  const cargardatos = async () => {
    try {
      const response = await usuariosApi.findUser(window.localStorage.token);
      setUser(response.data.usuario);
      console.log("Cargando datos", response.data.usuario);

      
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  const handleButtonClick = () => {
    try {
      if (contraseaAntigua === contraseaNueva && contraseaNueva !== "" && contraseaAntigua !== "") {
        setUser((prevUser) => ({
          ...prevUser,
          facultad: contraseaNueva, // Utiliza directamente contraseaNueva aquí
        }));
        setMensajeVisible(true);
        setDataLoaded(true);

        setTimeout(() => {
          setMensajeVisible(false);
        }, 3000); 
      } else {
        return console.log("Ingrese una contraseña válida");
      }
    } catch (error) {
      console.error("Error al manejar el clic del botón:", error);
    }
  };

  useEffect(() => {
    if (dataLoaded) {
      usuariosApi.updateUser(User, window.localStorage.token);
      console.log("Updated User", User);
    }
  }, [User, dataLoaded]);

  useEffect(() => {
    if (!User.nombres) {
      cargardatos();
    }
  }, []);



  const onVectorClick = useCallback(() => {
    window.localStorage.removeItem("token");
    router.push("/");
  }, [router]);
  
  return (
    <div id="container">
      {
        pag==1?
    <div id={styles.container} className={styles.configuracin11}>
      <img
        className={styles.configuracin11Child}
        alt=""
        src="/rectangle-29.svg"
        //onClick={onRectangleClick}
        onClick={e => setPag(2)}
      />
      <img
        className={styles.configuracin11Item}
        alt=""
        src="/rectangle-161.svg"
      />
      <div className={styles.configuracin11Inner} />
      <div className={styles.zonaPeligrosa}>** Zona peligrosa</div>
      <div className={styles.presioneElConoContainer}>
        <p
          className={styles.presioneElCono}
        >{`Presione el ícono si es que realmente deseas `}</p>
        <p className={styles.presioneElCono}>
          eliminar tu cuenta, pero recuerda que esto
        </p>
        <p className={styles.presioneElCono}>
          eliminaría tu registro del aplicativo.
        </p>
      </div>

      <div className={styles.rectangleDiv} />
      <div className={styles.cambiarContrasea}>
      <button  onClick={handleButtonClick}
      style={{ 
        background: 'transparent', border: '0px solid #ccc', padding: '5px',
        width: '150%', // Establece el ancho al 100% del contenedor
        boxSizing: 'border-box',  // Incluye el relleno y el borde en el ancho total
      }}
      >Cambiar Contraseña</button>
      </div>
      <div className={styles.cambiarContrasea1}>Cambiar contraseña</div>
      {mensajeVisible && (
      <>
        <div className={styles.fondoOscuro}></div>
        <div className={styles.mensajeFlotante}>
          Contraseña cambiada exitosamente
        </div>
      </>
    )}
      <div className={styles.eliminarCuenta}>Eliminar cuenta</div>
      <div className={styles.configuracin11Child1} />
      <div className={styles.configuracin11Child2} />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-183.svg"
        onClick={onGroupClick}
      />
      <div className={styles.antiguaContrasea}>
        <input
          type="text"
          onChange={function(evt) {setcontraseaAntigua(evt.target.value)}}
          style={{ 
            background: 'transparent', border: '0px solid #ccc', padding: '5px',
            width: '220%', // Establece el ancho al 100% del contenedor
            boxSizing: 'border-box',  // Incluye el relleno y el borde en el ancho total
          }}
          />
        </div>
      <div className={styles.nuevaContrasea}>
        <input
          type="text"
          onChange={function(evt) {setcontraseaNueva(evt.target.value)}}
          style={{ 
            background: 'transparent', border: '0px solid #ccc', padding: '5px',
            width: '220%', // Establece el ancho al 100% del contenedor
            boxSizing: 'border-box',  // Incluye el relleno y el borde en el ancho total
          }}
          />    
        </div>
      <div className={styles.configuracin11Child3} />
      <div className={styles.configuracin11Child4} />
      <div className={styles.configuracin}>Configuración</div>
      <div className={styles.cuenta}>Cuenta</div>
      <div className={styles.cerrarSesin} onClick={e => setPag(2)}>
        Cerrar sesión
      </div>
      <img
        className={styles.configuracin11Child5}
        alt=""
        src="/group-1921.svg"
      />
      
    </div>
    :
    <>
  {
    pag==2? 
    

      <div id='container' className={styles2.configuracin2}>
      <div className={styles2.frame}>
        <img className={styles2.frameChild} alt="" src="/rectangle-16.svg" />
        <img
          className={styles2.frameItem}
          alt=""
          src="/rectangle-29.svg"
          onClick={e => setPag(1)}
        />
        <div className={styles2.frameInner} />
        <div className={styles2.cerrarSesin}>Cerrar sesión</div>
        <div className={styles2.configuracin}>Configuración</div>
        <div className={styles2.cuenta} onClick={e => setPag(1)}>
          Cuenta
        </div>
        <img
          className={styles2.transhumansNewBeginnings}
          alt=""
          src="/transhumans-new-beginnings@2x.png"
        />
        <img
          className={styles2.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorClick}
        />
        <img
          className={styles2.vectorIcon1}
          alt=""
          src="/vector1.svg"
          onClick={onVectorClick}
        />
        <div className={styles2.deseasCerrarSesinContainer}>
          <p className={styles2.deseasCerrar}>¿DESEAS CERRAR</p>
          <p className={styles2.deseasCerrar}> SESIÓN?</p>
        </div>
        <div className={styles2.presioneElBotn}>Presione el botón</div>
      </div>
      <img className={styles2.configuracin2Child} alt="" src="/group-192.svg" />

    </div>
     
     : null 
  } </> 
    }
    </div>
  );
};

export default Configuracin11;
