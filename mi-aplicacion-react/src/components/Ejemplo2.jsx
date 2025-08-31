import { useState } from 'react'; //omponente "recuerde" cierta información y la muestre.
import "./css/ejemplo2.css"
import BotonesRutas from './BotonesRutas';

function Producto() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );

}

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}
function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </>
    );
}

function ElItem({ name, isPacked }) {
    return (
        <div>
            <li className="item">
                {name} {isPacked && '✅'}
            </li>
        </div>

    )

}

function Chinito() {
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink',
            border: '4px solid green'
        }
    }

    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );

}

function LaLista() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    );

}
export default function Ejemplo2() {
    return (
        <div>
            <BotonesRutas/>
            <h1>Ejemplo 2</h1>
            <Producto />
            <MyButton />
            <br />
            <br />
            <Profile />
            <Profile />
            <Profile />
            <TodoList />
            <Chinito />
            <ElItem />
            


        </div>


    )


}