import { useEffect } from "react"
import {useState} from "react"




const Greetings = (props) =>{
    const promesa = new Promise((res,rej)=>{
        let i =setTimeout(()=>{
            res(productos)
        },2000);
        
        clearTimeout(i)
    

    
    })
    
    
    
    promesa
    .then((productos)=>{console.log("Todo bien")
    console.log(productos)})
    .catch(()=>{console.log("todo mal")})
    
    console.log(promesa)
    
    
    
    
    
    
    
    
    
    
    
    let [lista, setLista] = useState([])
    



    const productos =[
        {nombre: "Kimono-ATAMA", precio: 200},
        {nombre: "Kimono-Kingz", precio: 500},
        {nombre: "Kimono-Shoyoroll",precio:1000},
        {nombre: "Kimono-Hayabusa", precio:150},
    ]


    

    useEffect(()=>{
        let u =setTimeout(()=>{
            setLista(productos)
        },2000)
        
        
        clearTimeout(u)
    
    }
        
        
        
        
        
        ,[lista])

    
    
    

    

    
        
        
        
        
    


    return<>


     <div>
         <h1>Bienvenido {props.nombre}</h1>
     </div>
     </>


  
   
}


export default Greetings