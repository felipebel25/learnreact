
import React from 'react';
import '../styles/BadgeRick.css';

import Gravatar from './Gravatar'
import confLogo from '../images/Rick_and_Morty_logo.png'


class BadgeRick extends React.Component{
    render(){
       return(
       <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} className="mb-4" height="100%" ></img>
            </div>
            <div className="Badge__section-name">
                <img src={this.props.img} alt=""/>
             
              <h1> 
                  {this.props.firstName} <br /> {this.props.lastName}
              </h1> 
            </div>
            <div className="Badge__section-info ">
                <h3>{this.props.jobTitle}</h3>
                <p>{this.props.twitter}</p>
              
            </div>
            <div className="Badge__footer">
                #{this.props.almohada}
            </div>
        </div>)

    }
}

export default BadgeRick