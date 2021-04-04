import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/BadgesList.css'
import '../styles/Badge.css';

import Gravatar from './Gravatar'

function useSearchBadges(badges){
  const [query , setQuery ] = React.useState('')

  const [filteredBadges ,setFilteredBadges] = React.useState(badges)

   React.useMemo(
     ()=>{const result = badges.filter(badge =>{
    return` ${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
   })

   setFilteredBadges(result)

},[badges, query]);
return{ query, setQuery, filteredBadges}
}

function BadgesList (props) {
     const badges = props.badges;

      const { query , setQuery, filteredBadges} = useSearchBadges(badges)



      if(filteredBadges.length === 0){
        return(
          <div>
         
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        )
        }
  return (
      <div>
        <div className="form-group p-2">
            <label>filter Badges</label>
            <input
              type="text" 
              className="form-control"
              value={query}
              onChange={(e)=>{
              setQuery(e.target.value)
            }}/>
        </div>  
          <ul className="Badgess">
         
            {filteredBadges.reverse().map((badges)=>{
              return (
                <li key={badges.id} className="Badge__li" >
                  <div className="Badge__imagen">
                    <Gravatar email={badges.email} className="Badge__avatar" width="60" alt=""/>
                  </div>
                  <Link className="text-reset text-decoration-none Badge__textos" to={`/badges/${badges.id}`}>

                  <div className="Badge__textos" >
                    <p>{badges.firstName} {badges.lastName}</p> 
                    <p>@{badges.twitter}</p>
                    <p>{badges.jobTitle}</p>
                  </div>
                            
                </Link>
                </li>
                )
                })}
          </ul>
      </div>
        )
    
}

export default BadgesList
