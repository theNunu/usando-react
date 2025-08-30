
import { useState } from 'react';
function MyUserBox() {
  const [name, setName] = useState("");
  // Declare una variable de estado para contener el valor de la entrada y una función para actualizarlo
  // const [lastName, setLastName] = userState("")

  function handleChange(e) { //Cree una función para manejar el evento de cambio:
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
      <input type="submit" />

    </form>

  )
}



export default MyUserBox