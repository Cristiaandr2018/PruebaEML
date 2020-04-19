import React from 'react';
import './App.css';
import { MdLocalPhone } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {carousel, Carousel} from 'react-responsive-carousel'
//import{FaFacebook} from 'react-icons/fa'


function Componente() {
  return (
    <div>
      {/*Fase 1 */}
      <div id="principal">

        {/*Banner informacion */}
        <div id="primero">
          <div id="numero">

            <a > <MdLocalPhone />+34 911 444 990  |</a>
          </div>
          <a id="correo" href="mailto:info@spainlifegroup.com">info@spainlifegroup.com</a>
        </div>
        {/*Fin Banner informacion */}

        {/*Banner servicios*/}
        <div id="servicios">

          <div>
            <img id="logo" src="http://lorempixel.com/150/150/"></img>

          </div>

          <nav id="menu">
            <ul>
              <li><a > QUIÉNES SOMOS </a> </li>
              <li><a > VALORES </a> </li>
              <li><a > EQUIPO </a> </li>
              <li><a > CLIENTES </a> </li>
              <li><a > PRODUCTO </a> </li>
              <li><a > SERVICIOS </a> </li>
              <li><a > CONTACTO </a> </li> 
              {/*Implemento este nuevo elemento para hacer
              un registro (CRUD)en otra pantalla*/}<li><a href="registro.js" target="_blank"> USUARIOS </a> </li> 
              <li><a href="http://facebook.com" target="_blank"><span><FontAwesomeIcon icon={faCoffee} /></span></a> </li>
              <li><a href="http://twitter.com" target="_blank"><span><FontAwesomeIcon icon={faCoffee} /></span></a> </li>
              <li><a href="http://linkedin.com" target="_blank"><span><FontAwesomeIcon icon={faCoffee} /></span></a> </li>

            </ul>
          </nav>





        </div>
        {/*Fin banner servicios*/}
      </div>
      {/*Carousel*/}
      
   
        <Carousel>
          <di>
            <img src="http://lorempixel.com/350/350/"></img>
            
          </di>
          <di>
            <img src="http://lorempixel.com/350/350/"></img>
            
          </di>
          <di>
            <img src="http://lorempixel.com/350/350/"></img>
          
          </di>
        </Carousel>

      
      {/* Fin Carousel*/}

      {/* Segundo banner informacion*/}

      <div id="segundo">

        <div id="segundoInfo">
        <p>Más de 20 años de <em>Experiencia</em> Añadiendo valor con valores</p>
        </div>
        <a id="contactanos" > Contáctanos </a>
        <a id="lee" href="#"> o Lee más </a>        

      </div>

      {/* Fin Segundo banner informacion*/}

      {/* Descripcion*/}
      <div id="descripcion">
        <div id="contenido">
        <h2 class="mt-xl">Quiénes <strong>Somos</strong></h2>
        <br/>
          <p>Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. 
            
            esconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras. Ha sobrevivido no solo 
            cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. <br/> <br/> <br/>
             Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.</p>
        </div>
        <div id="imagenInfo">
          <img src="http://lorempixel.com/350/210/"></img>

        </div>
      </div>
      {/* Fin Descripcion*/}

      {/* Footer*/}
      <footer id="footer">          
          <div class="row">
            <div id="news">
              <h4>Newsletter</h4>
              <p id="texto"> Introduzca su email para estar siempre informado de nuestros servicios y promociones. </p>
              <input id ="email"class="form-control" placeholder="Su Email" name="newsletterEmail" id="newsletterEmail" type="text"></input>
              <button class="btn btn-default" type="submit">Enviar</button>
            </div>
          

            <div id="contact">
              <h4>Contáctanos</h4>
              <p id="texto">Dirección: Velázquez 59, 2º izda. - 28001 Madrid</p>
              <p id="texto">Teléfono: +34 911 444 990</p>
              <p id="texto">Email: info@spainlifegroup.com</p>
            </div>
          



            <div id="siguenos">
              <h4>Síguenos</h4>
              <a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a>
              <i class="fa fa-facebook"></i>
            </div>
          
          <di id="copy">
            <img></img>
            <p id="copyright">© Copyright 2017. Todos los derechos reservados.</p>
            <a id="web" href="http://www.webspresenciales.com" target="_blank">Diseño: www.webspresenciales.com</a>
          <a href="#" class="subir"> Ir arriba </a>
          </di>



          </div>
          
     

      </footer>
      {/* Fin Footer*/}

    </div>

  )
}

const App = () => <div><Componente /></div>

export default App;
