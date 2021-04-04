import React, { Component } from 'react'
import '../styles/BadgeRick.css';
import '../components/styles/BadgesList.css'
import confLogo from '../images/Rick_and_Morty_logo.png'

import Skeleton, { SkeletonTheme } from '../components/skeleton'
import PageLoading from '../components/PageLoading'
import { Link } from 'react-router-dom'

let numero = 1;

export class BadgesRick extends React.Component {
    
    state = {
        
        loading: true,
        numero:1,
       
        data: {
            results:[]
        },
    
}
    
    componentDidMount(){
        this.fetchData()
        
    }
    fetchData= async (api) =>{
        this.setState({loading: true, error: null })
     try {
         const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.numero}`)
         const data = await response.json()
         this.setState({loading: false,
            data:{
                info: data.info,
                results:[].concat(
                    this.state.data.results,
                    data.results
                )
            },
             error: null,
              numero: this.state.numero + 1})
        
        
    }catch (error) {
        this.setState({loading: false, error})
         
     }
    }
   
    render() {
        if(this.state.loading){
            return     <PageLoading />
        }
        return (
           <React.Fragment>
                  <div className="Badges">
                        <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                            <img
                                className="Badges_conf-logo img-fluid"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                            </div>
                        </div>
                    </div>
                  </div>
            <div className="Badges__container">
            <ul  className="Badgess">
      
         
                            
                        {this.state.data.results.map(character =>(
                        <li key={character.id} className="Badge__li">
                            <div className="Badge__imagen">
                                <img src={character.image} alt=""/>
                            </div>
                            <Link className="text-reset text-decoration-none Badge__textos" to={`/badgesRick/${character.id}`}>
                            <div className="Badge__textos" >
                              <p>{character.name}</p> 
                                <p>@{character.status}</p>
                                <p>{character.species}</p>
                            </div>
                            </Link>
                         </li> 
                         
              ))}
                      {!this.state.loading && (
                     
                           <button onClick={
                            ()=> {this.fetchData()}
                        } className="btn btn-primary ml-4">punto</button>
                      )}
               
            </ul>
            </div>
            </React.Fragment>        
        )
    }
}

export default BadgesRick
