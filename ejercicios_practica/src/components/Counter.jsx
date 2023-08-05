import React, {useState} from 'react';

const Counter = () => {
    let [numero, setNumero] = useState(0);

    function sumar() {
        setNumero(numero + 1);
    }

    function restar() {
        setNumero(numero - 1);
    }
    
    return (
        <div>
            <h3>Contador: {numero}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar} disabled={numero < 1}>-</button>
        </div>
    );
};

export default Counter;