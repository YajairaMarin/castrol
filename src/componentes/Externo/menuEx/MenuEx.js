import { Link} from "react-router-dom";

function MenuEx() {

  	return (

  		<nav className="navbar navbar-default navbar-expand-md navbar-dark fixed-top bgDefault" >

		    
		    
		    <div className="collapse navbar-collapse" id="navbarCollapse">
				
				<ul className="navbar-nav mr-auto">
					<li>
			          	<img src='./logo.png' width='50' />
			        </li>

			        <li className="nav-item">
			          	<p className="frase">Nombres y apellidos del Usuario Externo </p>
			        </li>
				</ul>
			    <ul className="navbar-nav ml-auto">
			        <li className="nav-item ">
			          	<Link to="/"className="nav-link">Cerrar sesión <span className="sr-only">(current)</span></Link>
			        </li>
					
			    </ul>
		    </div>
            </nav>

  	)
    
  }


export default MenuEx;