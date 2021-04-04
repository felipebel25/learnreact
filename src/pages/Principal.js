import React from 'react';
import { Link } from 'react-router-dom';
import './styles/principal.css'

import astronaut from '../images/astronauts.svg'

import BadgeHeader from '../images/platziconf-logo.svg'



function Principal() {
    return(

        <React.Fragment>
            <main className="principal">
            <div className="containerer">
                <img src={BadgeHeader} alt=""/>
                <h1>print tu badge</h1>
                <h3>the easiest way to manage your conference.</h3>
                <Link to="/Badges"> <button className=" btn btn-primary">vamos alla</button> </Link>
            </div>
            
            <div className="image">
                <img src={astronaut} alt=""/>

            </div>
            </main>

        </React.Fragment>
    )
}

export default Principal
