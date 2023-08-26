import React, { useState } from 'react'
import './itinerary.css'
import Image from '../Image/Image'

export default function Itinerary() {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className='itinerary'>
                <div className="likes">
                    <p className='like'>👍</p>
                    <p>1</p>
                </div>
                <div className="usr">
                    <img src="/usrDef.png" alt="imagen de pepe" />
                    <p>Pepe</p>
                </div>
                <div className="hashtags">
                    <p>Hashtags:</p>
                    <p>#pepe #grillo</p>
                </div>
                <div className="duration">
                    <p>Duration:</p>
                    <p>2hs</p>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <p>$ $ $ $ $</p>
                </div>
                {modal ?
                    <p className='up' onClick={()=>{setModal(!modal)}}>↑</p>
                    :
                    <p className='down' onClick={()=>{setModal(!modal)}}>↓</p>
                }
            </div>
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
        </>
    )
}
