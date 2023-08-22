import React, { useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import Anchor from "../../components/Anchor/Anchor"

export default function Details() {
  //const urlApi = "http://190.97.40.223:3000/api/cities"
  const urlApi = "http://localhost:3000/api/cities"
  
  const [city, setCity] = useState({})
  const {id} = useParams()
  
  useEffect(() => {
    fetch(urlApi + '/' + id)
    .then(res => res.json())
    .then(data => {
      setCity(data.response)
    })
  },[])
  
  document.title = "MyTinerary - Details - " + city.name

  return (
    <>
    <main className='pgDetails'>
      <div className="hero">
        <div className="card">
          {city.image ?
            <img src={"../."+city.image} alt="city.name" />
            :
            <></>
          }
          
          <div className='data'>
            <h2>{city.name}</h2>
            <h3>{city.state} - {city.country}</h3>
            <p>Anniversary: {city.anniversary}</p>
            <h3 className='inter'>Interests</h3>
            <ul>
              {
                city.interests ?
                city.interests.map(int => <li key={int}>{int}</li>)
                :
                <li>Cargando</li>
              }
            </ul>
            <iframe src={city.location} loading='lazy'></iframe>
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