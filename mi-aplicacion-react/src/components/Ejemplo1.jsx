import "./css/ejemplo1.css"
import "./css/perfilAlexis.css"
function MyButton({ className }) {
    return (
        <button className={className} >
            I'm a button
        </button>
    );
}
function Profile() {
    const user = {
        name: 'Kim kardashan',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 100,
    };

    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,


                }}
            />
        </>
    );

}

function MyPerfil() {

    const userAlexis = {
        img: './images/alexis.png',
        nombre: 'Alexis',
        apellido: 'Cepeda',
        edad: '21',
        hobies: 'playing drum'

    }

    return (
        <div className="fondo-my-perfil">
            <h1>perfil de Alexis</h1>
            <img src={userAlexis.img} alt=""  className="foto-alexis"/>
            <p>nombre: {userAlexis.nombre}</p>
            <p>apellido: {userAlexis.apellido}</p>
            <p>edad: {userAlexis.edad}</p>
            <p>hobbies: {userAlexis.hobies}</p>
            


        </div>



    )

}
export default function Ejemplo1() {


    return (
        <div className="ejemplo1-fondo">
            <h1>Welcome to my app</h1>
            <MyButton className="my-button" />
            <Profile />
            <MyPerfil/>
        </div>
    );
}


