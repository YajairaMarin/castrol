
import Menu from '../menu/Menu'; 
 

  function Ingresar() {       
        return (
            <>

			<Menu />
            <form className="Ingresar">
                <h3>Ingresar</h3>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">Ingresar</button>
                <p className="forgot-password text-right">
                    Recuperar <a href="#">contraseña</a>
                </p>
            </form>
            </>
        );
  }

  export default Ingresar;