import { useNavigate } from 'react-router-dom';

export default function BotonesRutas() {

    const navigate = useNavigate();

    const handleGoToBotonLoco = () => {
        navigate('/boton');
    };
    const handleGoToEjemplo1 = () => {
        navigate('/ejemplo1');
    };
    const handleGoToEjemplo2 = () => {
        navigate('/ejemplo2');
    };
    const handleGoToMain = () => {
        navigate("/")
    }

    return (<div>
        <button onClick={handleGoToBotonLoco}>
            al boton loco
        </button>
        <button onClick={handleGoToEjemplo1}>
            al ejemplo1
        </button>
        <button onClick={handleGoToEjemplo2}>
            al ejemplo 2
        </button>

        <button onClick={handleGoToMain}>
            ir al principal
        </button>

    </div>


    )

}