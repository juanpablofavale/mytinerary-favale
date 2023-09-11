import Image from '../Image/Image'
import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './itinerary.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setLike } from '../../redux/actions/citiesActions'

export default function Itinerary({ itin }) {
    const [likes, setLikes] = useState(itin.likes)
    const [clase, setClase] = useState("")
    const {logged, token, user} = useSelector(store => store.authReducer)
    const {city} = useSelector(store => store.citiesReducer)
    const dispatch = useDispatch()

    const notAct = {
        image: "/comingsoon.jpg",
        name: "Not Yet Activities"
    }

    function moneda(){
        let monedas = ""
        for (let i = 0; i<itin.price; i++){
            monedas+="💰"
        }
        return monedas
    }

    const [modal, setModal] = useState(false)
    const [iti] = useAutoAnimate({duration:250})

    const handleLikeClick = async () => {
        if (logged){
            const res = await dispatch(setLike({id:itin._id, token, city}))
            setLikes(res.payload.response.likes)
        }else{
            toast.info("You must be logged in to like!")
        }
    }
    
    useEffect(()=>{
        if (likes?.includes(user._id)){
            setClase("liked")
        }else{
            setClase("")
        }
    }, [ ,likes])

    return (
        <div ref={iti}>
            <div className='itinerary'>
                <h2 className='title'>{itin.name}</h2>
                <div className="likes">
                    <p className={'like ' + clase} onClick={handleLikeClick}>👍</p>
                    <p>{likes?.length}</p>
                </div>
                <div className="usr">
                    <img src={itin.usrImage} alt={itin.usrName} />
                    <p><span className='by'>by</span> {itin.usrName}</p>
                </div>
                <div className="hashtags">
                    <p>Hashtags:</p>
                    <p>{itin.hashtags?.map(hash => hash + " ")}</p>
                </div>
                <div className="duration">
                    <p>Duration:</p>
                    <p>{itin.duration} Hs.</p>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <p>{moneda()}</p>
                </div>
                {!modal ?
                    <p className='up' onClick={()=>{setModal(!modal)}}>⇩</p>
                    :
                    <p className='down' onClick={()=>{setModal(!modal)}}>⇧</p>
                }
            </div>
            { modal &&
                <div className='hiddenActivities'>
                    <h2 className='activityTitle'>Activities</h2>
                    <div className="activities">
                        {itin.activities_id.length ?
                            itin.activities_id.map(act => <Image key={act.name} nombre={act.name} url={act.image} alt={act.name} />)
                            :
                            <Image nombre={notAct.name} url={notAct.image} alt={notAct.name} />
                        }
                    </div>
                    <div className='commentsContainer'>
                        <h2>Comments</h2>
                        <div className="under">
                            <img src="../../underConst.webp" alt="Under Construction" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
