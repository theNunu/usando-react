import { createRoot } from 'react-dom/client'


function ThingsBox() {
  return (
    createRoot(document.getElementById('root')).render(
      <h1>Hello React!</h1>

    )

  )

}

export default ThingsBox