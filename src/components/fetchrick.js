import React, { Component } from 'react'

import PageLoading from '../components/PageLoading'
import BadgeRick from '../components/BadgeRick'


class fetchrick extends React.Component {
    state ={
        loading: true,
        error:null,
        data: undefined,
        modalIsOpen: false,
    }
    componentDidMount(){
        this.fetchData()
    }
   
    fetchData = async () =>{
        this.setState({loading:true, error:null})
        try {
            const response = await fetch(
              `https://rickandmortyapi.com/api/character/${this.props.match.params.characterId}`
              
              );
              const data = await  response.json()
            this.setState({loading: false, data:data})
            } catch (error) {
                this.setState({loading: false, error:error})
                
            }
        } 
        render() {
        if(this.state.loading){
            return <PageLoading/>
        }
        

    const badge = this.state.data;
        return (
          <BadgeRick 
            img={badge.image}
            firstName={badge.name}
            jobTitle={badge.status}
            twitter={badge.location.name}
            almohada={badge.species}
            
          />
        )
    }
}

export default fetchrick
