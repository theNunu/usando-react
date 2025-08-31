import { createRoot } from 'react-dom/client'
import { useNavigate } from 'react-router-dom';
import BotonesRutas from './BotonesRutas';


function ThingsBox() {

  return (
    createRoot(document.getElementById('root')).render(
      <div>

        <h1>Hello React!</h1>

       

      </div>

    )

  )

}

export default ThingsBox