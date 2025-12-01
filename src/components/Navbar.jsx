import sun from  '../images/sun-on-transparent-background-free-png.webp'
function Navbar() {
    return(
          <nav>
            <div className='logo'>
              <h1>ClimaTech <img id='sun' src={sun} alt="" /></h1>
            </div>
    
            <div className="botoes">
              <a href="#">Login</a>
              <a href="#">Consulta</a>
              <a href="#">Sobre nós</a>
            </div>
          </nav> 
      )
}

export default Navbar