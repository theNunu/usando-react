import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({    firstname: 'John',
    lastname: 'Doe'});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        placeholder='pon el nombre'
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label><br />
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          placeholder='pon el apellido'
          value={inputs.lastname} 
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);


export default MyForm