import React from 'react';

import '../styles/Badge.css'
import './styles/BadgeNew.css'

import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import Badge from '../components/Badge';

import api from '../api'

class BadgeNew extends React.Component{
    state={
        loading: false,
        error: null,
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter: '',
        }
    }
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading: true,error:null})

        console.log('form was submiter')
        console.log(this.state)
        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})
            this.props.history.push('/Badges')
        }catch(error){
            this.setState({loading: false,error})
        }
    }

    handleClick= e =>{
        console.log(this.state.form)
    }
    render(){
        if(this.state.loading){
            return(<PageLoading/>)
        }
        return(
        <React.Fragment>
            
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="logo"/>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                        firstName={this.state.form.firstName || 'Nombre'}
                        lastName={this.state.form.lastName || 'Apellido'}
                        twitter={this.state.form.twitter || 'Twitter'}
                        almohada="sisoy" 
                        jobTitle={this.state.form.jobTitle || 'trabajo'}
                        email={this.state.form.email}

                        urlImage={this.state.form.email}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                        h1='New Badge '
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit}
                        onClick={this.handleClick}
                        formValue={this.state.form}
                        error={this.state.error}
                        />

                    </div>
                </div>
            </div>
        </React.Fragment>
            )
    }
}


export default BadgeNew;