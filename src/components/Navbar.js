
import React from 'react';
import { Link } from 'react-router-dom'


import './styles/Navbar.css'
import logo from '../images/logo.svg'
class Navbar extends React.Component{
    render(){
       return(
       <div className="Navbar">
           <div className="container-fluid">
            <Link className="Navbar__brand  ml-0" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>
            </Link>
            <Link className="Navbar__brand" to="/BadgesRick">
               
                <span className="font-weight-bold">Rick and morty</span>
         
            </Link>
           </div>
         
        </div>)

    }
}

export default Navbar