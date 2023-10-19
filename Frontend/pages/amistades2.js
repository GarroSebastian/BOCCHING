import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./amistades2.module.css";
import { useState, useEffect } from 'react';

const Amistades2 = () => {
  const router = useRouter();

  const onRectangle11Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onRectangle33Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onRectangle34Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const defaultUsuario = {
    nombres: 'Adrian',
    apellidos: 'Duarte',
    correo: '',
    genero: 'Masculino',
    nacimiento: '',
    edad: 0,
    apodo: 'Adri',
    contrasena: '',
    foto: '',
    facultad: 'Facultad de ingienieria',
    carrera: 'Ingienieria de sistemas',
    especialidad: 'Ingienieria de software',
    descripcion: 'Hola estoy usando Bocching.',
    mostrarNombre: true,
    //Agregue universidad
    universidad:'Universidad de Lima',
    ejemplo:'Programar'
  }
  const [usuario, setUsuario] = useState(defaultUsuario);

  const onClickChat = useCallback(() => {
    router.push("//mensajes2");
  }, [router]);

  return (
    <div className={styles.amistades2}>
      <div className={styles.general}>General</div>
      <div className={styles.detalles}>Detalles</div>
      <div className={styles.amistades2Child} />
      <img className={styles.amistades2Item} alt="" src="/polygon-2.svg" />
      <div className={styles.frameParent}>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Nombres:</div>
          <div className={styles.frameChild}>
          <div className={styles.dato}>{usuario.nombres}</div>
          </div>
          {
            //<div className={styles.nombre1Nombre}>Nombre 1 Nombre 2</div>
          }
          
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Género:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.genero}</div>
          </div>
          {
            //<div className={styles.gneroEjemplo}>Género ejemplo</div>
          }
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Facultad:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.facultad}</div>
          </div>
          {
            //<div className={styles.gneroEjemplo}>Facultad ejemplo</div>
          }
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Universidad:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.universidad}</div>
          </div>
          {
            //<div className={styles.gneroEjemplo}>Universidad ejemplo</div>
          }
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Apellidos:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.apellidos}</div>
          </div>
          {
            //<div className={styles.gneroEjemplo}>Apellido 1 Apellido 2</div>
            //<input className={styles.dato} type="text" id="nombres" value={usuario.nombres} onChange={e => setUsuario({...usuario,nombres: e.target.value})}></input>
          }
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Carrera:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.carrera}</div>
          </div>
          {
            //<div className={styles.carreraEjemplo}>Carrera ejemplo</div>
          }
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Especialidad:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.especialidad}</div>
          </div>
          {
            //<div className={styles.especialidadEjemplo}>Especialidad ejemplo</div>
          }
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.nombres}>Ejemplo:</div>
          <div className={styles.frameChild}>
            <div className={styles.dato}>{usuario.ejemplo}</div>
          </div>
          {
            //<div className={styles.especialidadEjemplo}>Ejemplo</div>
          }
        </div>
      </div>
      <div className={styles.igualdadDeDatos}>Igualdad de datos</div>
      <div className={styles.igualdadDeDatos1}>Igualdad de datos</div>
      <div className={styles.amistades2Inner} />
      <div className={styles.amistades2Child1} />
      <div className={styles.amistades2Child2} onClick={onRectangle11Click} />
      <div className={styles.cancelarAmistad}>Cancelar amistad</div>
      <div className={styles.bloquearUsuario}>Bloquear usuario</div>
      <div className={styles.amistades2Child3} />
      <div className={styles.amistades2Child4} />
      <div className={styles.ellipseDiv} />
      <img className={styles.groupIcon} alt="" src="/group-32.svg" />

            <div className={styles.nombreapodo}>
              {
                usuario.mostrarNombre?
                  <p>Nombre: {usuario.nombres}</p>
                :
                  <p>Apodo: {usuario.apodo}</p>
              }
            <button onClick={e => setUsuario({...usuario,mostrarNombre: !usuario.mostrarNombre})} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
            </div>
            
      
      <div className={styles.amistades2Child5} onClick={onClickChat}/>
      
      <img className={styles.amistades2Child6} alt="" src="/group-1351.svg" onClick={onClickChat}/>
      <div className={styles.descripccin}>Descripcción</div>
      <div className={styles.descripcinAModoDeEjemploWrapper}>
        <div className={styles.descripcinAModoContainer}>
          {
            /*
            <p className={styles.descripcinAModo}>
            Descripción a modo de ejemplo que
            </p>
            <p className={styles.descripcinAModo}>el usuario podrá escribir.</p>
            */
          }
          <p className={styles.datoDescripcion}>
          {usuario.descripcion}
            </p>
        </div>
      </div>
      <div className={styles.amistades2Child7} />
      <div className={styles.colecciones}>Colecciones</div>
      <img className={styles.polygonIcon} alt="" src="/polygon-2.svg" />
      <div className={styles.amistades2Child8} />
      <img className={styles.frameIcon} alt="" src="/frame3.svg" />
      <img className={styles.frameIcon1} alt="" src="/frame4.svg" />
      <img className={styles.recDerIcon} alt="" src="/rec-der.svg" />
      <img className={styles.derechaIcon} alt="" src="/derecha.svg" />
      <img className={styles.recDerIcon1} alt="" src="/rec-der.svg" />
      <div className={styles.amistades2Child9} />
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <div className={styles.amistades2Child10} />
      <div className={styles.amistades2Child11} />
      <div className={styles.amistades2Child12} />
      <div className={styles.amistades2Child13} />
      <div className={styles.tipoParent}>
        <div className={styles.tipo}>Tipo</div>
        <div className={styles.tipo}>Subtipo</div>
        <div className={styles.tipo}>Nombre</div>
        <div className={styles.tipo}>Afinidad</div>
        <div className={styles.tipo}>Duración</div>
      </div>
      <div className={styles.hobby}>Hobby</div>
      <div className={styles.hobby1}>Hobby</div>
      <div className={styles.hobby2}>Hobby</div>
      <div className={styles.hobby3}>Hobby</div>
      <div className={styles.xd}>xd</div>
      <div className={styles.xd1}>xd</div>
      <div className={styles.xd2}>xd</div>
      <div className={styles.xd3}>xd</div>
      <div className={styles.xd4}>xd</div>
      <div className={styles.xd5}>xd</div>
      <div className={styles.xd6}>xd</div>
      <div className={styles.xd7}>xd</div>
      <div className={styles.xd8}>xd</div>
      <div className={styles.xd9}>xd</div>
      <div className={styles.xd10}>xd</div>
      <div className={styles.xd11}>xd</div>
      <div className={styles.xd12}>xd</div>
      <div className={styles.xd13}>xd</div>
      <div className={styles.xd14}>xd</div>
      <div className={styles.xd15}>xd</div>
      <img className={styles.derechaIcon1} alt="" src="/derecha1.svg" />
      <div className={styles.amistades}>Amistades</div>
      <img className={styles.amistades2Child14} alt="" src="/polygon-2.svg" />
      <div className={styles.amistades2Child15} />
      <div className={styles.amistades2Child16} />
      <div className={styles.amistades2Child17} />
      <div className={styles.amistades2Child18} />
      <div className={styles.amistades2Child19} />
      <div className={styles.amistades2Child20} />
      <div className={styles.amistades2Child21} />
      <div className={styles.amistades2Child22} />
      <div className={styles.amistades2Child23} />
      <div className={styles.amistades2Child24} />
      <div className={styles.amistades2Child25} />
      <div className={styles.amistades2Child26} />
      <div className={styles.amistades2Child27} />
      <div className={styles.amistades2Child28} />
      <div className={styles.amistades2Child29} />
      <div className={styles.amistades2Child30} />
      <div className={styles.amistades2Child31} />
      <div className={styles.amistades2Child32} />
      <div className={styles.amistades2Child33} />
      <div className={styles.amistades2Child34} />
      <div className={styles.amistades2Child35} />
      <img className={styles.amistades2Child36} alt="" src="/group-1501.svg" />
      <img className={styles.amistades2Child37} alt="" src="/group-169.svg" />
      <img className={styles.amistades2Child38} alt="" src="/group-1501.svg" />
      <img className={styles.amistades2Child39} alt="" src="/group-169.svg" />
      <img className={styles.amistades2Child40} alt="" src="/group-1501.svg" />
      <img className={styles.amistades2Child41} alt="" src="/group-169.svg" />
      <img className={styles.amistades2Child42} alt="" src="/group-1501.svg" />
      <img className={styles.amistades2Child43} alt="" src="/group-169.svg" />
      <img className={styles.amistades2Child44} alt="" src="/group-1501.svg" />
      <img className={styles.amistades2Child45} alt="" src="/group-169.svg" />
      <img className={styles.amistades2Child46} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child47} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child48} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child49} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child50} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child51} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child52} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child53} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child54} alt="" src="/group-1601.svg" />
      <img className={styles.amistades2Child55} alt="" src="/group-1601.svg" />
      <div className={styles.adrianDuarte}>Adrian Duarte</div>
      <div className={styles.adrianDuarte1}>Adrian Duarte</div>
      <div className={styles.adrianDuarte2}>Adrian Duarte</div>
      <div className={styles.adrianDuarte3}>Adrian Duarte</div>
      <div className={styles.adrianDuarte4}>Adrian Duarte</div>
      <div className={styles.adrianDuarte5}>Adrian Duarte</div>
      <div className={styles.adrianDuarte6}>Adrian Duarte</div>
      <div className={styles.adrianDuarte7}>Adrian Duarte</div>
      <div className={styles.adrianDuarte8}>Adrian Duarte</div>
      <div className={styles.adrianDuarte9}>Adrian Duarte</div>
      <div className={styles.igualdadDeDatos2}>Igualdad de datos</div>
      <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
      <div className={styles.amistades2Child56} />
      <div className={styles.txt01}>Bocching</div>
      <div className={styles.amistades2Child57} onClick={onRectangle33Click} />
      <div className={styles.amistades2Child58} onClick={onRectangle34Click} />
    </div>
  );
};

export default Amistades2;
