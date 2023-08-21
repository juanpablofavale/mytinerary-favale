import React from 'react'
import { Link } from 'react-router-dom'

export default function CardCity({ciudad, set}) {
  return (
    <div key={ciudad.name} className="card">
    <div className="card-header">
      <img src={ciudad.image} alt={ciudad.name} />
      {
        ciudad._id!=0 ?
            <p>{ciudad.interests[0]}</p>
        :
            <></>
        }    
    </div>
    <div className="card-body">
      <h2>{ciudad.name}</h2>
      <h3>{ciudad.state}</h3>
      {
          ciudad._id!=0 ?
          <Link to={'/details/' + ciudad["_id"]}>Show More</Link>
          :
          <Link onClick={()=>set("")}>Show All</Link>
      }
    </div>
  </div>
)
}