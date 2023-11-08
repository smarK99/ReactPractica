//Componente Hijo: Indica el nivel de peligro que le mandamos al padre
import { ProgressBar } from "react-bootstrap";

//El hijo necesita saber que tipo de datos va a recibir del padre
type DangerBarProps = {
    value: number;
};

const DangerBar = ({value}:DangerBarProps) =>{

    //Segun el valor recibido del padre se mostrara en un color diferente
    const getVariant = (value:number) =>{
        if(value < 30){
            return 'success';
        } else if (value < 60){
            return 'warning';
        } else {
            return 'danger';
        }
    };

    return(
        <ProgressBar animated now={value} variant={getVariant(value)}/>
    )
}

export default DangerBar