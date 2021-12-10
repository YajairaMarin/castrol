import { Link} from "react-router-dom";
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
 

  function Login() {       
        return (
            <>

            <Menu />
            
            <div className="container">
                <div className="row justify-content-center">
        
                    <div className="col-xl-10 col-lg-10 col-md-9">
        
                        <div className="card o-hidden border-0 shadow-lg my-6">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">¡Bienvenido de nuevo!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Ingrese su correo" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Recuérdame</label>
                                                    </div>
                                                </div>
                                                <Link to="/App" className="btn btn-primary btn-user btn-block">
                                                    Ingresar
                                                </Link>                                           
                                            </form>

                                            <div className="text-center">
                                                <Link className="small" to="/Recuperar">¿Olvidaste tu contraseña?</Link>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/registrar">¡Crea tu cuenta!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>  
    
        </div>


        
    <Footer />
    </>

    );
  }

  export default Login;