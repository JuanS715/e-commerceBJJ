import Cartwidget from "./CartWidget"

const Navbar = () => {


    
    
    
    
    
    return <>
        <div id="Navbar">
        <nav class="nav nav-pills nav-justified">
          <a class="nav-link active" aria-current="page" href="#" >Kimonos</a>
          <a class="nav-link" href="#" >Aparrel</a>
          <a class="nav-link" href="#">Bags</a>
          <a class="nav-link disabled">Comming soon</a>
        </nav>
        <Cartwidget/>
        </div>
        


    </>
    
}

export default Navbar