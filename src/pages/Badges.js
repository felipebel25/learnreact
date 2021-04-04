import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import Skeleton, { SkeletonTheme } from '../components/skeleton'
import PageError from '../components/PageError'
import api from '../api'
import { datatype } from 'faker'

export class Badges extends Component {
  
  
  constructor(props){
      super(props)
      this.state = {
            loading: true,
            error: null, 
            data: undefined,
           
            boton: false,
        
    }
      console.log('1. constructor')
    }
    componentDidMount(){
      this.fetchData()
      
    }
    componentWillUnmount(){

    }
    fetchData = async () =>{
      this.setState({loading: true, error: null})
      try{
        const data= await api.badges.list();
        this.setState({loading: false,data, error: null})
      }catch(error){
        this.setState({loading: false, error})

      }
    }

   
    
   
    render() {



      if(this.state.error){
        return(
          <PageError error={this.state.error} />
        ) ;

      }
       
        return (
            <div>
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
                   <div className="Badges_buttons pl-4 pb-2">
                        <Link to="/badges/new" className="btn btn-primary">New File</Link>
                        <button type="button"   className="btn btn-primary ml-4">hola</button>
                   </div>

                    <div className="Badges__list">
                    
                    <div className="Badges__container">
                       
                            {this.state.loading === true &&this.state.data === undefined
                            ?
                               <Skeleton />
                               
                               :
                               <BadgesList
                                badges={this.state.data}
                                 />
                              }
                          </div>
                            
                              {this.state.laoding && 'Loading...'}

                     </div>
                     
                     </div>
              
            </div>
     
        )
    }
}

export default Badges
