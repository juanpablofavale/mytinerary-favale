import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useEffect, useRef, useState } from 'react'
import './itinerary.css'
import Image from '../Image/Image'
import { useSelector } from 'react-redux'


export default function Itinerary() {
    const {city} = useSelector(store => store.citiesReducer)

    const [modal, setModal] = useState(false)
    const [iti, enableAnimations] = useAutoAnimate({duration:250})
    const itineraries = city.itineraries_id
    console.log(itineraries && itineraries)

    return (
        <div ref={iti}>
            {itineraries && itineraries.map(itin => {
                return (
                <div className='itinerary'>
                <div className="likes">
                    <p className='like'>👍</p>
                    <p>{itin.likes}</p>
                </div>
                <div className="usr">
                    <img src={itin.usrImage} alt={itin.usrName} />
                    <p>{itin.usrName}</p>
                </div>
                <div className="hashtags">
                    <p>Hashtags:</p>
                    <p>{itin.hashtags.map(hash => hash + " ")}</p>
                    </div>
                    <div className="duration">
                    <p>Duration:</p>
                    <p>{itin.duration}</p>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <p>{itin.price}</p>
                </div>
                {modal ?
                    <p className='up' onClick={()=>{setModal(!modal)}}>↑</p>
                    :
                    <p className='down' onClick={()=>{setModal(!modal)}}>↓</p>
                }
            </div>
        )})}
            { modal && 
                <div className='hiddenActivities'>
                <h2 className='activityTitle'>Activities</h2>
                <div className="activities">
                <Image nombre="Ushuaia" url="/ushuaia.jpeg" alt="Ushuaia" />
                <Image nombre="Ushuaia" url="/ushuaia.jpeg" alt="Ushuaia" />
                    <Image nombre="Ushuaia" url="/ushuaia.jpeg" alt="Ushuaia" />
                </div>
                <div className='commentsContainer'>
                    <h2>Comments <span>1</span></h2>
                    <div className="comments">
                        <div className="headerComment">
                            <img src="/usrDef.png" alt="usr" />
                            <h4>Pepe le Peu</h4>
                        </div>
                        <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita earum iusto modi consequatur vitae quam, quae deserunt quos voluptate blanditiis. Perferendis ea reprehenderit dolorum repudiandae fugit eaque necessitatibus incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita earum iusto modi consequatur vitae quam, quae deserunt quos voluptate blanditiis. Perferendis ea reprehenderit dolorum repudiandae fugit eaque necessitatibus incidunt.</p>
                    </div>
                    <div className="newComent">
                        <img src="/usrDef.png" alt="usr" />
                        <div className="input">
                            <input type="text" />
                            <p>▶</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
