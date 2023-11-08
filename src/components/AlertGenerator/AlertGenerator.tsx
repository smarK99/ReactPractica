import { Alert } from "react-bootstrap";

//Tipo que puede recibir el componente
type AlertGeneratorProps = {
    message: string;
}

//El componente hijo tiene args del tipo ALERT GENERATOR PROPS
const AlertGenerator = ( {message} : AlertGeneratorProps) => {
    return(
        <>
            <Alert variant="success" className="mt-2 w-25">
                <Alert.Heading> Mensaje Recibido </Alert.Heading>
                <p>{message}</p>
            </Alert>
        </>
    )
}

export default AlertGenerator