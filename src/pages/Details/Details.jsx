import React, { useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import Anchor from "../../components/Anchor/Anchor"

export default function Details() {
  const [city, setCity] = useState({})
  const {id} = useParams()

  useEffect(() => {
    fetch('http://localhost:3000/api/cities/'+id)
    .then(res => res.json())
    .then(data => {
      setCity(data.response)
    })
  },[])
    
  return (
    <>
    <main className='pgDetails'>
      <div className="hero">
        <div className="card">
          <img src={"../."+city.image} alt="city.name" />
          <div className='data'>
            <h2>{city.name}</h2>
            <h3>{city.state} - {city.country}</h3>
            <p>Anniversary: {city.anniversary}</p>
            <h3 className='inter'>Interests</h3>
            <ul>
              {
                city.interests ?
                city.interests.map(int => <li>{int}</li>)
                :
                <li>Cargando</li>
              }
            </ul>
          </div>
        </div>
        <Anchor title="Go Back" link="/cities"/>
        <div className="under">
          <img src="../../underConst.webp" alt="Under Construction" />
        </div>
      </div>
    </main>
    </>
  )
}