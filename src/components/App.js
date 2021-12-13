import Navbar from "./Navbar"
import Greetings from "./ItemListContainer"

import Buttons from "./Botones"



const foo = () =>{
    console.log("soy foo")
}





function App() {
    





return <>
    <Navbar foo={foo}/>
    <Greetings nombre="Juan"/>
    <main>Soy main</main>
    <Buttons/>
    
   
    
    

</>
}



export default App
