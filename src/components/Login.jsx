import celimaLogo from "../assets/imagenes/Celima-logo.png"
import { Link } from 'react-router-dom';
import LLave from "../assets/imagenes/llave.png"
import Arroba from "../assets/imagenes/arroba.png"
import "../styles/login.css";

function Login() {

  return (
    <>
      <section className="split-screen">

        <section className="left">
            <section className="copy">
                <h1>Productos para cada ambiente</h1>
                <p>Los mejores productos del Perú para remodelar las Griferías, Sanitarios, Porcelanatas, <br />
                Cerámicos y Mayólicas de tu hogar</p>
            </section>
        </section>

        <section className="right">
            <form>
                    <section className="copy">
                        <picture className="image-container">
                        <img src={celimaLogo} alt="Logo de celima"/>    
                        </picture>
                        <div className="texto-container">
                            <h2>Proyecto iComex</h2>
                            <p >Accede a la plataforma con sus credenciales</p>
                        </div>
                    </section>

                    <section className="input-container name">
                        <label htmlFor="fname">ID Cliente</label>
                        <input id="fname" name="fname"  placeholder="Analista 01" type="text"/>
                        <img src={Arroba} alt="ícono del usuario" className="input-arroba"/>
                        <p>Crédenciales únicas del proveedor</p>
                    </section>

                    <section className="input-container password">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" name="password" placeholder="........" type="password"/>
                        <img src={LLave} alt="ícono de password" className="input-icon"/>
                    </section>
                    
                    <section className="contraseña">
                    <Link to="./validar" className="contraseña-link">Olvidé mi contraseña</Link>
                    </section>

                    <section className="button-container">
                        <Link to="./ingresar">
                        <button className="signup-btn custom-btn" type="submit">Ingresar</button>
                        </Link>
                    </section>  
                    <section className="footer-formulario">
                        <p>Desarrollado por CSTI</p>  
                    </section>
            </form>
        </section>
</section>
    </>
  )
}
export default Login
