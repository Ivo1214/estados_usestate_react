import React, {useState} from 'react';
// Alternativa para no usar index para mapear el array de nombres
import {v4 as id} from 'uuid';

const NameList = () => {
    const [nombres, setNombres] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    function handleNombres () {
        if(inputValue.trim() != '') {
            setNombres([...nombres, inputValue]);
            setInputValue('');
        }
    }

    function borrarInvitados() {
        setNombres([]);
    }

    return (
        <div>
            <h1>Lista de invitados</h1>
            <div>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <br/>
                <button onClick={handleNombres}>Agregar</button>
                <br />
                <button onClick={borrarInvitados}>Borrar invitados</button>

            </div>
            <div>
                <ul>
                    {
                        nombres.map((invitado,id)=>(
                            <li key={id}>{invitado}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NameList;