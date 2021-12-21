import ItemDetail from "./ItemDetail"
const productoInicial1={
    nombre : "Kimono ATAMA",
    precio: 200
}
const ItemDetailContainer =()=>{

    let[producto, setProducto]= useState(null)
    
    
    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            let i =setTimeout(()=>{
                res(producto)
            },2000);
            
            clearTimeout(i)
            promesa
            .then((productos)=>{console.log("Todo bien")
            console.log(productos)})
            .catch(()=>{console.log("todo mal")})
    
            let u =setTimeout(()=>{
                setProducto(producto)
            },2000)
            
            
            clearTimeout(u)
                })})
            
            
            return<>
                <div>
                  <ItemDetail producto={productoInicial1}/>
                </div>
            </>
}
    
    
    
export default ItemDetailContainer