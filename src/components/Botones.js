import {useState} from "react"



const Buttons =()=> {

    const [contador, setContador] = useState(0)


    const sumar = () =>{
        setContador(contador + 1)
    
    }

    const resta = () =>{
        setContador(contador - 1)
    }


    const borrar = () =>{
        setContador (0)
    }





    return <>
    <p>Contador Actual : {contador}</p>
    <button onClick={sumar}>sumar</button>
    <button onClick={resta}>restar</button>
    <button onClick={borrar}>borrartodo</button>
    </>
    

}  

    export default Buttons