import { useState } from 'react';
import Imagenes from "../assets/imagenes/logo.png";
import Figura from "../assets/imagenes/Figura.png";
import Lupa from "../assets/imagenes/lupa.png"
import "../styles/ingresar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faBars,faTimes,faLessThan} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Ingresar() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const handleLogout = () => {
        setShowLogoutPopup(false);
        navigate('/');
      };

    return(
        <>

        <header className='header'>
            
            <div className='header__menu'>
              <FontAwesomeIcon icon={faBars} onClick={() => setMenuOpen(!menuOpen)} className='menu-icon'/>
            </div>

            <picture className="header__imagenes">
                <img src={Imagenes} className="header__imagen--logotipo" alt="imagenes"/>
                <img  src={Figura} className="header__imagen--figura" alt="Figura"/>
            </picture>

            <section className="header__texto">
                <h1 className="header__texto-h1">Analista 001</h1>
                <p className="header__texto-p">Sociedad Cerámica Lima</p>
            </section>
            <section className="header__opcion" onClick={() => setShowLogoutPopup(!showLogoutPopup)}>  
                <span></span>
                {showLogoutPopup && <div className="logout-popup">
                <button onClick={handleLogout}>Cerrar sesión</button></div>
                }
            </section>
        </header>
    
        <section className="bienvenido">

            <section className={menuOpen ? "bienvenido__texto--abierto ": "bienvenido__texto" }>
                <h1 >Bienvenido Dino</h1>
                <p  >Opciones disponibles para acceder</p>
            </section>

            <form className="bienvenido__formulario">
                <label htmlFor="buscar"><span></span></label>
                <input type="text" name="buscar" placeholder="Buscar" id="buscar"/>
                <img src={Lupa} alt="ícono de buscar" className="input-lupa"/>
            </form>

       </section>


       <section className={`menu__side ${menuOpen ? 'menu__side_move' : ''}`}>

                <div className={menuOpen ? "icon-menu--open": "icon__menu"}>
                    <FontAwesomeIcon icon={ menuOpen ? faLessThan : faGreaterThan } onClick={() => setMenuOpen(!menuOpen)}/>
                </div>

                <div className="icon__cerrar">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setMenuOpen(!menuOpen)}/>
                </div>

                <section className="options__menu">
            
                        <Link to="/">
                        <div className={`option ${menuOpen ? "menuOpen option-modificar  " : "option-modificar"}`}>
   
                            <section className='option__d'>
                                <span></span>
                            </section>
                            
                            <h4>Principal</h4>      
                        </div>

                      </Link>
                      
                        <Link to="#">
                        <div className={`option ${menuOpen ? "menuOpen" : ""}`}>

                            <section className='option__i'>
                                <span></span>
                            </section>

          
                            <h4>Importaciones</h4>
                        </div>

                        </Link>

                        <Link to="#">
                        <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                            <section className='option__e'>
                                <span></span>
                            </section>
          
                            <h4>Exportaciones</h4>
                        </div>

                        </Link>

                        <Link to="#">
                        <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                            <section className='option__r'>
                                <span></span>
                            </section>
            
                            <h4>Reclamaciones</h4>
                        </div>
                        </Link>

                </section>
    </section>

    <div className={menuOpen ? "menu-overlay--abierto": "menu-overlay"}></div>

    <main className="principal">

        <section className={menuOpen ? "principal__modulos--abierto": "principal__modulos"}>

                <section className={menuOpen ? "texto-abierto": " texto"}>
                    <h1>Módulos activos</h1>
                </section> 

                <section className="principal__modulos--contenido">

                        <section className="contenido">
             
                            <section className='contenido__i'>
                                 <span></span>
                            </section>

                            <h1>Importaciones</h1>
                            <p>Coordinacion, control y optimización</p>

                        </section>

                        <section className="icono">
                           <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>
                
                <section className="principal__modulos--contenido">

                        <section className="contenido">
         
                            <section className='contenido__e'>
                                 <span></span>
                            </section>

                            <h1>Exportaciones</h1>
                            <p>Registro de documentación para venta</p>
                        </section>

                        <section className="icono">
                           <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>

                <section className="principal__modulos--contenido">
                        <section className="contenido">
              
                            <section className='contenido__r'>
                                 <span></span>
                            </section>

                            <h1>Reclamaciones</h1>
                            <p>Inicio y seguimiento</p>
                        </section>

                        <section className="icono">
                          <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>
        </section>
    </main>

    <footer className="containerfooter">

        <section className="roaped">
                <p>Desarrollado por CSTI Corp</p>
        </section>

    </footer>

        </>
    );
}

export default Ingresar;