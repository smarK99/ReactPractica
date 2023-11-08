//Componente padre: recibe un valor que le enviamos
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import DangerBar  from '../DangerBar/DangerBar';

const DangerInput = () => {
    //VAR que guarda el valor elegido por el user
    const [value, setValue] = useState(0);

    //Actualizamos el estado de value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }

    return (
        <>
            <div className='m-3 w-50'>
                <h2>Props React</h2>
            </div>

            {/* Componente Padre */}
            <Form.Range value={value} onChange={handleChange}/>

            {/* Componente Hijo */}
            <DangerBar value={value}/>

        </>
    )
}

export default DangerInput