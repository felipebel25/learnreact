
import React from 'react';
import '../styles/Badge.css';
import Gravatar from './Gravatar'
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
       return(
       <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} ></img>
            </div>
            <div className="Badge__section-name">
            <Gravatar 
                email={this.props.email}
                className="Badge__avatar"/>
             
              <h1> 
                  {this.props.firstName} <br /> {this.props.lastName}
              </h1> 
            </div>
            <div className="Badge__section-info ">
                <h3>{this.props.jobTitle}</h3>
                <p>@{this.props.twitter}</p>
            </div>
            <div className="Badge__footer">
                #{this.props.almohada}
            </div>
        </div>)

    }
}

export default Badge