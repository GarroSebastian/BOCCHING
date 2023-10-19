import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes1.module.css";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import UsuarioApi from "../api/usuario";
//Solicitudes Recibidas

const Solicitudes1 = () => {
  Zoom()
  


  const SolicitudRecibida = {
    emisor : '',
    receptor : '',
    tipo: Number,
    date_cambio: Date
  }
  const router = useRouter();
  
    const array1 = ["nombre1 ", "apodo1 ", "fecha1"];
    const array2 = ["nombre2 ", "apodo2 ", "fecha2"];
    const array3 = ["nombre3 ", "apodo3 ", "fecha3"];
    const array4 = ["nombre4 ", "apodo4 ", "fecha4"];
  
    const [solicitudesRecibidas, setSolicitudesRecibidas] = useState([]);
  
    useEffect(() =>{
      fetch(UsuarioApi.SolicitudRecibida)
      .then((response) => response.json())
      .then((data) => {
        setSolicitudesRecibidas(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
      }, []);

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onEnviadasTextClick = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const AceptarSolicitud = (solicitud) => {
    // Crear una copia del objeto de solicitudes excluyendo la solicitud que deseamos eliminar
    const nuevasSolicitudes = { ...solicitudesRecibidas };
    delete nuevasSolicitudes[solicitud];

    // Actualizar el estado con las nuevas solicitudes
    setSolicitudesRecibidas(nuevasSolicitudes);
  };

  return (
    <div id="container">
    <div className={styles.solicitudes1}>
      <img
        className={styles.solicitudes1Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img className={styles.solicitudes1Item} alt="" src="/rectangle-16.svg" />
      <img
        className={styles.solicitudes1Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle3Click}
      />
      <div className={styles.rectangleDiv} />
      {
        //Los botones Rechazar faltantes
        /*
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector9.svg" />
        */
      }
      
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.recibidas}>Recibidas</div>
      <div className={styles.solicitudesRecibidas}>Solicitudes recibidas</div>
      <div className={styles.aceptar}>Aceptar</div>
      <div className={styles.rechazar}>Rechazar</div>
      <div className={styles.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.solicitudes1Child1} />
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      {
        //Desde el Child 2 al 5, las solicitudes
        /*
      <div className={styles.solicitudes1Child2} />
      <div className={styles.solicitudes1Child3} />
      <div className={styles.solicitudes1Child4} />
      <div className={styles.solicitudes1Child5} />

      {Object.entries(solicitudesRecibidas).map(([solicitud, valores]) => (
          <div>
          <div key={solicitud} className={styles.solicitudes1Child2}>
              {valores.map((valor, index) => (
                <span key={`${solicitud}-${index}`}>{valor}</span>
                
              ))}
          </div>
          {
            //Las 2 siguientes lineas son los iconos de perfil
          }
          <div className={styles.ellipseDiv} />
          <img className={styles.groupIcon} alt="" src="/group-119.svg" />

          <button className={styles.solicitudes1Child15} onClick={() => AceptarSolicitud(solicitud)}>
          {
            //IMAGEN de listo : check list
          }
          </button>
          
          </div>
          
        ))}

        {Object.entries(solicitudesRecibidas).map(([solicitud, valores]) => (
      <div key={solicitud} className={`${styles.solicitudes1Child2} ${styles.solicitudes1Child2}-${solicitud}`}>
        {
        valores.map((valor, index) => ( 
        <span key={`${solicitud}-${index}`}>{valor}</span>))
        }
        <div className={`${styles.ellipseDiv} ${styles.ellipseDiv}-${solicitud}`} />
        <img className={`${styles.groupIcon} ${styles.groupIcon}-${solicitud}`} alt="" src="/group-119.svg" />
        <button className={`${styles.solicitudes1Child15} ${styles.solicitudes1Child15}-${solicitud}`} onClick={() => AceptarSolicitud(solicitud)}>
          {
            //IMAGEN de listo : check list
          }
          </button>
          </div>
          ))}
      
        */
      }
      
      {Object.entries(solicitudesRecibidas).map(([solicitud, valores]) => (
          <div>
          <div key={solicitud} className={styles.solicitudes1Child2}>
              {valores.map((valor, index) => (
                <span key={`${solicitud}-${index}`}>{valor}</span>
                
              ))}
          </div>
          {
            //Las 2 siguientes lineas son los iconos de perfil
          }
          <div className={styles.ellipseDiv} />
          <img className={styles.groupIcon} alt="" src="/group-119.svg" />

          <button className={styles.solicitudes1Child15} onClick={() => AceptarSolicitud(solicitud)}>
          {
            //IMAGEN de listo : check list
          }
          </button>
          
          </div>
          
        ))}

      
        
      {/* 
      {
        //Filas de imprimir del Child 2 al 5.
      }  
      <div className={styles.solicitudes1Child2} />
      <div className={styles.solicitudes1Child3} />
      <div className={styles.solicitudes1Child4} />
      <div className={styles.solicitudes1Child5} />
      {
        //Circulo de la imagen perfil
      }
      <div className={styles.ellipseDiv} />
      <div className={styles.solicitudes1Child6} />
      <div className={styles.solicitudes1Child7} />
      <div className={styles.solicitudes1Child8} />
      <b className={styles.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido3}>Nombre y Apellido / Apodo</b>
      {
        //Imagenes de perfil del groupIcon y el Chil 9 a 11.
      }
      <img className={styles.groupIcon} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child9} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child10} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child11} alt="" src="/group-119.svg" />
      {
        //La linea de la fecha
      }
      <div className={styles.lineDiv} />
      <div className={styles.solicitudes1Child12} />
      <div className={styles.solicitudes1Child13} />
      <div className={styles.solicitudes1Child14} />
      {
        //Valores
      }
      <div className={styles.fechaOHora}>Fecha o hora</div>
      <div className={styles.fechaOHora1}>Fecha o hora</div>
      <div className={styles.fechaOHora2}>Fecha o hora</div>
      <div className={styles.fechaOHora3}>Fecha o hora</div>
      {
        //BOTON aceptar: de 15 a 18
      }
      <div className={styles.solicitudes1Child15} />
      <div className={styles.solicitudes1Child16} />
      <div className={styles.solicitudes1Child17} />
      <div className={styles.solicitudes1Child18} />
      {
        //BOTON rechazar : LOGO
        //<img className={styles.vectorIcon9} alt="" src="/vector7.svg" />
      }
      <img className={styles.vectorIcon9} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector9.svg" />
      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
      <img className={styles.checkIcon} alt="" src="/check.svg" />
      <img className={styles.checkIcon1} alt="" src="/check.svg" />
      <img className={styles.checkIcon2} alt="" src="/check.svg" />
       */}
      {
        //El menu de la izq
      }
      <img
        className={styles.solicitudes1Child19}
        alt=""
        src="/group-1461.svg"
      />
    </div>
    </div>
  );
};

export default Solicitudes1;
