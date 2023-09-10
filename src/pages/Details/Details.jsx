import Anchor from "../../components/Anchor/Anchor"
import Itinerary from '../../components/Itinerary/Itinerary'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCityById } from '../../redux/actions/citiesActions'
import "./details.css"
import { toast } from "react-toastify"

export default function Details() {
  
  const { city } = useSelector(store => store.citiesReducer)
  const dispatch = useDispatch()
  const {id} = useParams()
  
  useEffect(() => {
    toast.promise(
      dispatch(getCityById(id)),
      {
        pending: "Loaging..."
      }
    )
  },[])
  
  document.title = "MyTinerary - Details - " + city.name
  
  return (
    <>
    <main className='pgDetails'>
      <div className="hero">
        <Link to="/cities" className='backAnchor'>
          <img src="/back.png" alt="back" className='backImg'/>
        </Link>
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
        <div className="itineraries">
          {city.itineraries_id?.length ? 
            <h2>Itineraries</h2>
            :
            <>
              <h2>Not Itineraries Yet</h2>
              <img src="/notYet.webp" alt="not yet" className='notYet'/>
            </>
          }
          {city.itineraries_id?.map(itin => {
            return <Itinerary key={itin._id} itin={itin}/>
          })}
        </div>
        <Anchor title="Go Back" link="/cities"/>
      </div>
    </main>
    </>
  )
}