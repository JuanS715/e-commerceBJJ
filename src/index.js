import App from "./components/App"


//1) Necesitamos la variable React en scope
//import React from "react"




//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom" 



//3) Necesitamos una aplicaciond e reat
//function App(){return "Hola mundo"} es lo mism
//4) Necesitamos dibujar la aplicacion en el DOM
ReactDOM.render(<App/>, document.getElementById("root"))
