

import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
import Footer from '../footer/Footer';



	function Nosotros() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron /> // Este Componente lo crearé a continuación 
				<Detalles /> // Este Componente lo crearé a continuación 

	  		</main>

	  		<Footer />

	  		</>

		)

	}



export default Nosotros;
