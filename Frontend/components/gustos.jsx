import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./Perfil.module.css";
import GustoApi from "../api/gusto.js";


/*Editar Gustos:
- Intenta coordinar con Rodrigo para que te haga componentes nuevos que puedas usar más fácilmente
- Ya te dejé las variables que componen el objeto Gusto (también comenté qué hace cada una), y coordinaré con Backend para que las tenga iguales
- Actualmente, la pantalla muestra los gustos leídos del Backend arriba, y abajo hay <select> e <input> para introducir los datos de un nuevo gusto. Cámbialo como necesites
- Si se te ocurre cómo renombrar el tipo "Alimento" para que quede mejor con sus subtipos "Comida" y "Bebida", genial
- Subtipos "Franquicia" y "Creador@ de contenido" deberían ser checkboxs en vez de <select> (permite marcar de 1 a muchos, "Sin especificar" desmarca el resto)
- Afinidad es un <select> con los valores [Sin especificar, Me encanta, Me fascina, Me gusta, Me es indiferente, Me aburre, Me disgusta]
- Duración es un <select> con los valores [Sin especificar, Duración ilimitada, Ya lo consumí, Lo estoy consumiendo, Lo consumiré pronto, Espero consumirlo próximamente]
- Compañía son checkboxs con las opciones [Sin especificar, Solo, con una persona, en grupo] (“Sin especificar” desmarca todo)
- REVISA LA TABLA DE LA PÁGINA 17 DEL WORD DE FUNCIONALIDADES para saber qué atributos aparecen con qué Tipos (verde = aparecen, rojo = no aparecen). Si puedes intenta cumplir el amarillo, sino descártalo

Guardar en Backend:
- "Añadir" debe subir el Gusto al Backend (POST) y tras eso llamar al handleGustos() para recargar los datos
- "Eliminar" no tiene botón. Puedes pedirle uno a Rodrigo o ponerlo dentro de "Editar". Más fácil sería poner un botón Eliminar al costado de cada Gusto, dentro del .map()
- "Eliminar" debe eliminar el Gusto del Backend (DELETE) y tras eso llamar al handleGustos() para recargar los datos
- Para "Editar" (PUT), puedes hacer que lleve a una pestaña nueva, o eliminar el botón e integrar la opción en la pestaña actual; luego puede haber un Editar al costado de cada Gusto, o uno general (recomiendo este). Si lo necesitas, puedes cambiar los text por inputs o coordinar con Rodrigo
- Si elegiste la opción que recomendé, "Editar" haría un update de todos los Gustos (uno por uno), y tras eso llamar al handleGustos() para recargar los datos
*/

const Gustos = ({id}) => { //si id es null, estás en mi-perfil (te deja editar los datos). si tiene valor, estás viendo otro perfil (no te deja editar)

  const router = useRouter();

  const defaultGusto = {
    _id: '', //el id del gusto
    idUsuario: '', //el id del usuario al que pertenece el gusto. No se muestra en pantalla
    idTipo: 0, //el id del tipo de gusto. Se guarda como número pero en pantalla se muestra como texto. Aaron ya hizo un <select> borrador
    subtipo: '', //cada caracter es un valor booleano de si el checkbox se marcó o no. Aaron ya hizo un <select> borrador
    nombre: '', //el nombre del gusto. Se muestra en pantalla. Un mismo usuario no puede tener 2 gustos con el mismo nombre
    idAfinidad: 0, //el id de la afinidad del gusto. Se guarda como número pero en pantalla se muestra como texto
    idDuracion: 0, //el id de la duracion del gusto. Se guarda como número pero en pantalla se muestra como texto
    idCompania: 0 //el id de la compañía del gusto. Se guarda como número pero en pantalla se muestra como texto
  }
  const [gustos, setGustos] = useState([])
  const [nuevoGusto, setNuevoGusto] = useState(defaultGusto)

  const arrayTipo = ['Sin especificar','Franquicia','Juego de mesa','Hobby','Pasatiempo + Juego',
  'Alimento','Músic@','Creador(a) de contenido','Deporte','Otro'];
  const [ID_Tipo, setID_Tipo] = useState(0);
  const arrayFranquicia = ['Sin especificar','Videojuego','Película','Serie','Libro','Otro']
  const arrayPasatiempo = ['Sin especificar','Aire libre','Espacio cerrado','Ambos']
  const arrayAlimento = ['Sin especificar','Comida','Bebida']
  const arrayMusica = ['Sin especificar','Solista','Grupo','Ambos']
  const arrayCreador = ['Sin especificar','Gameplays','Tops','Críticas','Aprendizaje','Sketches','Informativo','Historia','Día a día','Otro']
  const arraySubTipo = [[''],arrayFranquicia,[''],[''],arrayPasatiempo,arrayAlimento,arrayMusica,arrayCreador,[''],['']];
  
  const primero=663, salto=50;
  const [contador, setContador] = useState(true);
  const onRectangle11Click = useCallback(() => { //Boton editar
    // Cambiar el valor de contador cuando se presiona el botón 
    setContador(prevContador => !prevContador);
  }, []);

  const onRectangle12Click = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await GustoApi.guardarGusto(gustos, token);
      console.log(token);
  
      if (response && response.status === 201) {
        // La data fue guardada en la DB
        console.log('Gustos guardados correctamente');
      } else {
        console.log(gustos);
        console.log(response, response.status);
        console.error('Error al guardar gustos');
      }
    } catch (error) {
      console.error('Ocurrió un error', error);
    }
    //Boton añadir
    // Cambiar el valor de contador cuando se presiona el botón 
    console.log("Añadir presionado");
  };

  const handleGustos = async() => {
    if(id===null){
      GustoApi.getGustosCurrent().then((user)=>{
        const aux = user.data.gustos;
        setGustos(aux)
      });
    }
  }

  const handleInputChange = (index, fieldName, event) => {
    const updatedGustos = [...gustos];
    updatedGustos[index] = {
        ...updatedGustos[index],
        [fieldName]: event.target.value
    };
    setGustos(updatedGustos);
  };

  useEffect(() => {
    handleGustos();
  }, [])
  
  return (
    <>
        <div className={styles.miperfil21Child1} />
        <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
        <img className={styles.derechaIcon} alt="" src="/derecha3.svg" />
        <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
        <div className={styles.miperfil21Child2} />
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <div className={styles.tipo}>Tipo</div>
        <div className={styles.subtipo}>Subtipo</div>
        <div className={styles.nombre}>Nombre</div>
        <div className={styles.afinidad}>Afinidad</div>
        <div className={styles.duracin}>Duración</div>
        {
        gustos?.map((item, index) => {
            return (
            <>
                <div className={styles.hobby} style={{ top: `${primero + salto * index}px` }}>
                {
                    // Condition to determine if values are editable or not
                    contador
                    ? item.tipo
                    : (
                        <select
                        type="text"
                        value={arrayTipo[item.tipo]}
                        readOnly={contador}
                        onChange={(e) => handleInputChange(index, 'tipo', e)}
                        />
                    )
                }
                
                </div>
                <div className={styles.xd} style={{ top: `${primero + salto * index}px` }}>
                {
                    // Condition to determine if values are editable or not
                    contador
                    ? item.subtipo
                    : (
                        <select
                        type="text"
                        value={arraySubTipo[item.tipo][0]}
                        readOnly={contador}
                        onChange={(e) => handleInputChange(index, 'subtipo', e)}
                        />
                    )
                }
                
                </div>
                <div className={styles.xd4} style={{ top: `${primero + salto * index}px` }}>
                {
                    // Condition to determine if values are editable or not
                    contador
                    ? item.nombre
                    : (
                        <input
                        type="text"
                        value={item.nombre}
                        readOnly={contador}
                        onChange={(e) => handleInputChange(index, 'nombre', e)}
                        />
                    )
                }
                </div>
                <div className={styles.xd8} style={{ top: `${primero + salto * index}px` }}>
                    {
                        // Condition to determine if values are editable or not
                        contador ?
                            item.afinidad
                        :
                            <select
                            type="text"
                            value={item.afinidad}
                            readOnly={contador}
                            onChange={(e) => handleInputChange(index, 'afinidad', e)}
                            />
                    }
                </div>
                <div className={styles.xd12} style={{ top: `${primero + salto * index}px` }}>
                    {
                        // Condition to determine if values are editable or not
                        contador ?
                            item.duracion
                        :
                            <select
                            type="text"
                            value={item.duracion}
                            readOnly={contador}
                            onChange={(e) => handleInputChange(index, 'duracion', e)}
                            />
                    }
                </div>
                <div className={styles.miperfil21Child3} style={{ top: `${695 + salto * index}px` }} />
            </>
        )})
        }

        <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
        <div className={styles.misColecciones}>Mis Gustos</div>
        <div className={styles.aquPodrsAgregar}>
        Aquí podrás agregar tus gustos personales, editarlos o eliminarlos
        </div>
        <div className={styles.miperfil21Child7} />
        <div className={styles.miperfil21Child8} onClick={onRectangle11Click} />
        <div className={styles.miperfil21Child9} onClick={onRectangle12Click} />
        <div className={styles.editar} onClick={onRectangle11Click}>Editar</div>
        <div className={styles.aadir} onClick={onRectangle12Click}>Añadir</div>
        
        <div className={styles.hobby} style={{marginLeft: '-3px', top: `${primero+salto*gustos?.length}px`}}>
        <select value={nuevoGusto.idTipo} onChange={e => {
            const selectedIndex = e.target.selectedIndex; // Obtiene el índice del elemento seleccionado
            setNuevoGusto({ ...nuevoGusto,idTipo: e.target.value});
            setID_Tipo(selectedIndex)
        }} >
            {
            arrayTipo.map((item, index) => {return (<option key={index}>{item}</option>)})
            }
        </select>
        </div>

        <div className={styles.hobby} style={{left: '500px', marginLeft: '-3px', top: `${primero+salto*gustos?.length}px`}}>
        <select value={nuevoGusto.subtipo} onChange={e => setNuevoGusto({ ...nuevoGusto,subtipo: e.target.value})} style={{width: "200%"}}>
            {
            arraySubTipo[ID_Tipo].map((item, index)=>{return(<option key={index} value={item}>{item}</option>)})
            }
        </select>
        </div>

        <div className={styles.hobby} style={{left: '700px', marginLeft: '-3px', top: `${primero+salto*gustos?.length}px`}}>
            <input type="text" value={nuevoGusto.nombre} onChange={e => setNuevoGusto({ ...nuevoGusto,nombre: e.target.value})} style={{width: "100px"}} />
        </div>

        <div className={styles.hobby} style={{left: '900px', marginLeft: '-3px', top: `${primero+salto*gustos?.length}px`}}>
            <input type="text" value={nuevoGusto.idAfinidad} onChange={e => setNuevoGusto({ ...nuevoGusto,idAfinidad: e.target.value})} style={{width: "100px"}} />
        </div>

        <div className={styles.hobby} style={{left: '1100px', marginLeft: '-3px', top: `${primero+salto*gustos?.length}px`}}>
            <input type="text" value={nuevoGusto.idDuracion} onChange={e => setNuevoGusto({ ...nuevoGusto,idDuracion: e.target.value})} style={{ width: "100px"}} />
        </div>

    </>
  );
};

export default Gustos;