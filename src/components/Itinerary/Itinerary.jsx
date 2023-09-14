import Image from '../Image/Image'
import React, { useRef, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './itinerary.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setLike } from '../../redux/actions/citiesActions'
import { BiMailSend } from "react-icons/bi"
import { deleteComment, postComment, putComment } from '../../redux/actions/commentsActions'
import Comment from '../Comment/Comment'

export default function Itinerary({ itin }) {
    const [likes, setLikes] = useState(itin.likes)
    const [comments, setComments] = useState(itin.comments.toReversed())
    const {logged, token, user} = useSelector(store => store.authReducer)
    const {city} = useSelector(store => store.citiesReducer)
    const dispatch = useDispatch()
    const newComment = useRef("")
    const commentRef = useRef()

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newComment.current.value != ""){
            const data = {
                comment:newComment.current.value,
                user_id:user._id,
                itinerary_id:itin._id
            }
            await toast.promise(
                dispatch(postComment({data:data, token:token})).then(res => {
                    return setComments([res.payload, ...comments])
                }),
                {
                    pending: "Adding comment..."
                }
            )
            newComment.current.value = ""
        }
    }

    const handleDeleteClick = async (id) => {
        await toast.promise(
            dispatch(deleteComment({id:id, token:token})).then(res => {
                return setComments(comments.filter(com => com._id != id))
            }),
            {
                pending: "Deleting comment..."
            }
        )
    }

    const handleUpdateClick = async ({id, comment}) => {
        await toast.promise(
            dispatch(putComment({comment:comment, id:id, token:token})).then(res => {
                const aux = comments.filter(com => com._id != id)
                return setComments([res.payload, ...aux])
            }),
            {
                pending: "Updating comment..."
            }
        )
    }

    const handleLikeClick = async () => {
        if (logged){
            const res = await dispatch(setLike({id:itin._id, token, city}))
            setLikes(res.payload.response.likes)
        }else{
            toast.info("You must be logged in to like!")
        }
    }
    
    return (
        <div ref={iti} className='contItin'>
            <div className='itinerary'>
                <h2 className='title'>{itin.name}</h2>
                <div className="likes">
                    {likes?.includes(user?._id) 
                    ?
                    <p className={'like liked'} onClick={handleLikeClick}>👍</p>
                    :
                    <p className={'like'} onClick={handleLikeClick}>👍</p>
                    }
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
                        {logged &&
                        <form action="" className='newComment' onSubmit={handleSubmit}>
                            <img src={user.image} alt={user.lastName} />
                            <input ref={newComment} type="text" />
                            <button><BiMailSend /></button>
                        </form>
                        }
                        {comments.length ?
                            <div ref={commentRef} className='comments'>
                                {comments.map(comm => <Comment key={comm._id} com={comm} user={user} hedit={handleUpdateClick} hdelete={handleDeleteClick} />)}
                            </div>
                            :
                            <div className="comments center">
                                <img src="../../noComments.png" alt="No Comments" />
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
