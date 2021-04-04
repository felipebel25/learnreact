import React from 'react'

class BadgeForm extends React.Component{
    state ={ 
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twita:''

    }



    render(){
        return(
            <div>
                <h1>{this.props.h1}</h1>
                <form onSubmit={this.props.onSubmit} >
                    <div className="form_group">
                        <label >First Name</label>
                        <input 
                        onChange={this.props.onChange} className="form-control" 
                        type="text"
                        name="firstName" 
                        value={this.props.formValue.firstName}/>

                    </div>
                    <div className="form_group">
                        <label >Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValue.lastName}/>

                    </div>
                    <div className="form_group">
                        <label >email</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValue.email}/>

                    </div>
                    <div className="form_group">
                        <label >trabajo</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValue.jobTitle}/>

                    </div>
                    <div className="form_group">
                        <label >twita</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValue.twitter}/>

                    </div>
                    <button type="button" onClick={this.props.onSubmit} className=" btn btn-primary">Save</button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm;