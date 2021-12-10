import { Link} from "react-router-dom";
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
 

  function Registrar() {       
        return (
            <>

			<Menu />
            <div className="container">
                <div className="row justify-content-center">    
                    <div className="col-xl-10 col-lg-10 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-6">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">¡Crea tu cuenta!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Nombre" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                        placeholder="Apellido" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                    placeholder="Correo" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                    placeholder="Confirmar correo" />
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleRepeatPassword" placeholder="Confirmar contraseña" />
                                                </div>
                                            </div>
                                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                                Registrarse
                                            </a>
                                        </form>
                                    
                                        <div className="text-center">
                                                <Link className="small" to="/Recuperar">¿Olvidaste tu contraseña?</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/Login">¿Ya tienes una cuenta? ¡Ingresa!</Link>
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

  export default Registrar;