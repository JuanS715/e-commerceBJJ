import Cartwidget from "./CartWidget"

const Navbar = () => {


    
    
    
    
    
    return <>
        <div id="Navbar">
        <nav className="nav nav-pills nav-justified">
          <a className="nav-link active" aria-current="page" href="#" >Kimonos</a>
          <a className="nav-link" href="#" >Aparrel</a>
          <a class="nav-link" href="#">Bags</a>
          <a class="nav-link disabled">Comming soon</a>
        </nav>
        <Cartwidget />
        </div>
        


    </>
    
}

export default Navbar