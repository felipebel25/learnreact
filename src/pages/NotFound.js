import React from 'react'
import { Link } from 'react-router-dom';

import astronaut from '../images/img404.png'
function NotFound() {
    return (
        <React.Fragment>
            <main className="principal">
            <div className="containerer">
              
                <h1>Error 404</h1>
                <h3>pagina no encontrada</h3>
                <Link to="/Badges"> <button className=" btn btn-primary"> Regresar al inicio</button> </Link>
            </div>
            
            <div className="image">
                <img src={astronaut} alt=""/>

            </div>
            </main>

        </React.Fragment>
    )
}

export default NotFound
