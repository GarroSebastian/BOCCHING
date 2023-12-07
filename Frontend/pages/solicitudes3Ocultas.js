import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Zoom } from '../extra/zoom';

/*
El máximo de solicitudes se puso para evitar llenar la pantalla de solicitudes. El cancelar las solicitudes
debería hacer que se cambien los números de las solicitudes que por ahora se identifican con Friend #, esto
es un problema ya que si se borra la solicitud 6 y se crea una nueva, existirán 2 solicitudes Friend 7 lo cual
hace que si se hace algún cambio a cualquiera de estas, ambas cambias a la vez incluyendo si es que se cancela
una de las 2. 


Falta definir bien cual es la estructura de datos de las solicitudes, podría ser algo similar a lo que ya se tiene
aquí, sin embargo si se tenía algo en mente igual se puede cambiar. Una vez se llame al backend se podrá extraer
toda la info necesaria como el id de otros usuarios etc.

Falta revisar como el recipiente va a ser notificado de que se ha mandado una solicitud visible, en fin toda
la función de crear relaciones entre usuarios lo cual no me queda claro aún como se va a hacer.


*/


const Solicitudes3Ocultas = () => {
  Zoom();
  const router = useRouter();

  const MAX_REQUESTS = 7; // Maximum number of requests

  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: 'Friend 1', status: 'hidden', senderId: 2 },
    { id: 2, name: 'Friend 2', status: 'hidden', senderId: 1 },
    // ... other friend requests
  ]);



  //Async peticion a backend para pedir id del que envía y destinatario. uso de API ?
  const onEnviarClick = (friendId) => {
    setFriendRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === friendId ? { ...request, status: 'pending' } : request
      )
    );
  };

  const onMakeVisibleClick = (friendId) => {
    setFriendRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === friendId ? { ...request, status: 'visible' } : request
      )
    );
  };

  const onCancelClick = (friendId) => {
    setFriendRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== friendId)
    );
  };

  const onNewRequestClick = () => {
    if (friendRequests.length < MAX_REQUESTS) {
      const newRequestId = friendRequests.length + 1;
      setFriendRequests((prevRequests) => [
        ...prevRequests,
        { id: newRequestId, name: `Friend ${newRequestId}`, status: 'hidden', senderId: 1 },
      ]);
    } else {
      // Optionally show a message to the user that the maximum limit has been reached
      alert('Maximum limit reached. You cannot send more requests.');
    }
  };

  return (
    <div id="container">
      <div>
        {/* ... (your existing UI elements) */}
        <button onClick={onNewRequestClick} disabled={friendRequests.length >= MAX_REQUESTS}>
          Nueva Solicitud Oculta
        </button>
        {friendRequests.map((request) => (
          <div key={request.id}>
            <p>{request.name}</p>
            <p>Status: {request.status}</p>
            {request.status === 'hidden' && (
              <>
                <button onClick={() => onEnviarClick(request.id)}>Enviar</button>
              </>
            )}
            {request.status === 'pending' && (
              <>
                <button onClick={() => onMakeVisibleClick(request.id)}>Hacer Visible</button>
                <button onClick={() => onCancelClick(request.id)}>Cancelar</button>
              </>
            )}
            {request.status === 'visible' && (
              <>
                <button onClick={() => onCancelClick(request.id)}>Cancelar</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solicitudes3Ocultas;



