
import { useState } from 'react';


function PruebaRegister() {
  const [inputs, setInputs] = useState({});


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  return (
    <form>
      <label>UserName:
        <input
          type="text"
          name="username"
          placeholder='pon el nombre de usuario'
          value={inputs.username}
          onChange={handleChange}
        />
      </label><br />
      <label>Email:
        <input
          type="email"
          name="email"
          placeholder='pon tu email'
          value={inputs.email}
          onChange={handleChange}

        />
      </label><br />
      <label>Password: 
        <input
          type="password"
          name="password"
          placeholder='pon la contraseña'
          value={inputs.password}
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.username} {inputs.email} {inputs.password}</p>
    </form>


  )

}

export default PruebaRegister