import { createRoot } from "react-dom/client";
import { useState } from 'react';


function OtherBox() {
    const [myCar, setMyCar] = useState("");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
             <p>Current value: {myCar}</p>
        </form>

        
    )
}


export default OtherBox