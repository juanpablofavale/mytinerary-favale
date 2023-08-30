import React, { useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import Anchor from "../../components/Anchor/Anchor"
import Itinerary from '../../components/Itinerary/Itinerary'
import { useDispatch, useSelector } from 'react-redux'
import { getCityById } from '../../redux/actions/citiesActions'

export default function Details() {
  const { city } = useSelector(store => store.citiesReducer)
  const dispatch = useDispatch()
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(getCityById(id))
  },[])
  
  document.title = "MyTinerary - Details - " + city.name

  return (
    <>
    <main className='pgDetails'>
      <div className="hero">
        <div className="card">
          <div className="img">
            {city.image ?
              <img src={"../."+city.image} alt="city.name" />
              :
              <></>
            }
          </div>
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
        <div className="itineraries">
          <h2>Itineraries</h2>
              <Itinerary />
        </div>
        <div className="under">
          <img src="../../underConst.webp" alt="Under Construction" />
        </div>
      </div>
    </main>
    </>
  )
}