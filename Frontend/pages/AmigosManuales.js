import React, {useState} from 'react';
import { useCallback } from "react";
import { useRouter } from "next/router";

/*Añadir amigos se limita a solo grupo A y grupo B, falta reajustar el atributo groups: en los amigos es 
posible que no sea necesario ponerlo. además faltaría dar la opción de crear grupos con nombres personalizables,
 la forma en la que están los amigos es por ahora, cuando se reciba la información de amigos desde el backend
 se podrán añadir mientras se añaden amigos uno por uno de una manera similar a lo que hay ahora. 
*/

const AmigosManual = () => {

  //Conseguir amigos desde backend a través de la api ?
const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Friend 1',
      groups: ['Group A'],
      selectedGroup: '',
    },
    {
      id: 2,
      name: 'Friend 2',
      groups: ['Group A', 'Group B'],
      selectedGroup: '',
    },
    {
        id: 3,
        name: 'Friend 3',
        groups: ['Group B'],
        selectedGroup: '',
      },
    {
        id: 4,
        name: 'Friend 4',
        groups: ['Group A', 'Group B'],
        selectedGroup: '',
      }  
    ]);

    const handleSelectChange = (friendId, selectedGroup) => {
      setFriends((prevFriends) =>
        prevFriends.map((friend) =>
          friend.id === friendId ? { ...friend, selectedGroup } : friend
        )
        
      );
      console.log(selectedGroup);
      console.log(friendId);
      console.log('Cambio detectado');
      console.log(friends);
    };

    //Guardar amigos a través de la api en backend
    const addFriendToGroup = (friendId) => {
      setFriends((prevFriends) =>
        prevFriends.map((friend) => {
          if (friend.id === friendId && friend.selectedGroup !== '') {
            if (!friend.groups.includes(friend.selectedGroup)) {
              friend.groups.push(friend.selectedGroup);
            }
            console.log(friends);
            console.log('añadido');
            console.log(friendId);
            
            friend.selectedGroup = ''; // Reset selectedGroup después de añadirlo, descomentar para que se borren los grupos y ver los cambios o comentar para ver en la consola los logs
          }
          
          return friend;
        })
      );
    };

    //crear botón para eliminar amigo de un grupo, necesario ver los grupos para esto
      function removeFriendFromGroup(friendId, groupName) {
        // Encontrar amigo por su ID
        let index = friends.findIndex((f) => f.id == friendId);
        // Eliminar grupo del array de grupos del amigo
        friends[index].groups = friends[index].groups.filter((g) => g != groupName);
        setFriends([...friends]);
      } 
      

      return (
        <div>
          {/* Render your friends and groups UI here */}
          {friends.map((friend) => (
            <div key={friend.id}>
              <p>{friend.name}</p>
              <p>Groups: {friend.groups.join(', ')}</p>
    
              {/* Select component to choose a group */}
              <select
                value={friend.selectedGroup}
                onChange={(e) => handleSelectChange(friend.id, e.target.value)}
              >
                <option value="">Select Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
                {/* Add more options as needed, se pueden añadir de acuerdo a los grupos existentes o creados */}
              </select>
    
              {/* Button to add friend to selected group */}
              <button onClick={() => addFriendToGroup(friend.id)}>
                Add to Selected Group
              </button>
            </div>
          ))}
        </div>
      );
}
export default AmigosManual;