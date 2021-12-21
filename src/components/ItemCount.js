import {useState} from "react"





const ItemCount =({stock,initial,onAdd})=> {

    

    const [contador, setContador] = useState(initial)

    
    const sumar = () =>{
        setContador(contador + 1)
    
    }

    const resta = () =>{
        setContador(contador - 1)
    }


    const borrar = () =>{
        setContador (0)
    }

    const agregarItem = ()=>{
        console.log("aca agrego un item con onA")
        onAdd(contador)

    }
    return <>
    
    <p>Contador Actual : {contador}</p>
    <button onClick={sumar}>sumar</button>
    <button onClick={resta}>restar</button>
    <button onClick={borrar}>borrartodo</button>
    <button onClick={agregarItem}>agregar item </button>
    </>
    

}  

    export default ItemCount