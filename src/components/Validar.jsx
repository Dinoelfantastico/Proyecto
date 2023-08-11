import celimaLogo from "../assets/imagenes/Celima-logo.png"
import { Link } from "react-router-dom"
import Arroba from "../assets/imagenes/arroba.png"
import "../styles/validar.css"


function Validar () {
    
    return(

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
                        <label htmlFor="fcorreo">Correo electrónico</label>
                        <input id="fcorreo" name="fcorreo"  placeholder="Analista 01" type="text"/>
                        <img src={Arroba} alt="ícono del usuario" className="input-arroba"/>
                    </section>

                    <section className="acceder">
                    <Link to="/" className="contraseña-link">Acceder a tu cuenta</Link>
                    </section>

                    <section className="container">
                        <Link to="/ingresar">
                        <button className="signup-btn custom-btn" type="submit">Validar</button>
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

export default Validar