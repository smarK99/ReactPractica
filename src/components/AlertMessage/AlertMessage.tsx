//Componente padre
import { useState } from 'react';
import AlertGenerator from '../AlertGenerator/AlertGenerator';


const AlertMessage = () => {

    //Var que guarda el texto del campo de text
    const [inputValue, setInputValue] = useState('');

    //Var que guarda el mensj
    const[message, setMessage] = useState('');

    //Muestra el componente hijo segun el estado
    const [showAlert, setShowAlert] = useState(false);

    //Si el campo de txt no esta vacio se va a guardar el txt en message
    //Se renderiza el componente hijo
    const handleClick = () => {
        if(inputValue.trim() !== ''){
            setShowAlert(true);
            setMessage(inputValue);
        } else {
            setShowAlert(false);
        }
    }

    return(
        <>
            <div className="m-3">
                 <h2>Props React 2</h2>
                
                {/*Componente padre */}
                <input type="text" value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={handleClick}>Enviar</button>
                
                {/*Componente Hijo 
                    si showAlert es TRUE se muestra el alertGen*/}
                {showAlert && <AlertGenerator message={message}/>}


            </div>
        </>
    )
}

export default AlertMessage 