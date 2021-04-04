import React from 'react'
import {Link} from 'react-router-dom'
import './styles/PageError.css'

import obito from '../images/Jeune_Obito_Uchiwa.jpg'

function PageError (props) {
    return (
        <div className="PageError">
            <img src={obito} alt="Error" className="img-error" />
        <h1 className="error-text">{props.error.message}</h1>
        <Link to="/" className="btn btn-primary">
           Back home
        </Link>
      </div>
    )
}

export default PageError
