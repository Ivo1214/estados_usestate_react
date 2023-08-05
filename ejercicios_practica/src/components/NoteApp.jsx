import React, {useState} from 'react';

const NoteApp = () => {
    const [notas, setNotas] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleNotas () {
        if(inputValue.trim() != '') {
            setNotas([...notas, inputValue]);
            setInputValue('');
        }
    }

    function eliminarNota (index) {
        const updatedNotes = [...notas];
        updatedNotes.splice(index, 1);
        setNotas(updatedNotes);
    }



    return (
        <div>
            <h1>Notas</h1>
            <div>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <br/>
                <button onClick={handleNotas}>Agregar nota</button>
                <br />

            </div>
            <div>
                <ul>
                    {
                        notas.map((nota,index)=>(
                            <li key={index}>{nota} <button onClick={()=> eliminarNota(index)}>Eliminar</button></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NoteApp;