import { useState, useEffect } from "react"

import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const ItemListContainer =({})=>{

    const productos =[
        {nombre: "Kimono-ATAMA", precio: 200},
        {nombre: "Kimono-Kingz", precio: 500},
        {nombre: "Kimono-Shoyoroll",precio:1000},
        {nombre: "Kimono-Hayabusa", precio:150},
    ]


        const[cantidad, setCantidad] = useState(0)
        let[lista, setLista] = useState([])
        useEffect(()=>{
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
    
            let u =setTimeout(()=>{
                setLista(productos)
            },2000)
            
            
            clearTimeout(u)
        
        }
            
            
            
            
            
            ,[lista])
    

        const onAdd = (ammount)=>{
         console.log("soy on add")
         console.log("Cantidad de items" + cantidad)
         setCantidad(cantidad)
            
        }
     

    
    
    return<>


     <div>
         <h1>Bienvenido {}</h1>

         <ItemCount stock={6} initial={1} ondAdd={onAdd}/>
         <ItemList lista={lista}/>
     </div>
     </>


  
   
    }


export default ItemListContainer