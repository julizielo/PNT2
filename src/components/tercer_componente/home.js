import Contador from "../primer_componente/contador"
import Saludador from "../segundo_componente/saludador"
function Home() {
    return(
        <>
        <h1>Bienvenido a mi app react :P</h1>
        <Contador/>
        <Saludador/>
        </>
    )
}

export default Home;