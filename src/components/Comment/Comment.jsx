import { BiSolidCommentEdit, BiMessageCheck, BiMessageMinus } from "react-icons/bi";
import { RiChatDeleteFill } from "react-icons/ri";
import React, { useEffect, useRef, useState } from 'react'

export default function Comment({com, user, hedit, hdelete }) {
    const [edit, setEdit] = useState(false)
    const comment = useRef()

    const handleClickEdit = () => {
        setEdit(!edit)
        const commentEdited = comment.current.value
        hedit({id: com._id, comment: commentEdited})
    }

    const handleInput = (e) => {
        if (e.key == "Escape"){
            setEdit(!edit)
        }else if (e.key == "Enter"){
            handleClickEdit()
        }
    }

    return (
    <>
        {com.user_id==user._id
        ?
            <div className="derecha" key={com._id}>
                {
                    edit
                    ?
                    <input onKeyUp={handleInput} ref={comment} type="text" placeholder={com.comment}/>
                    :
                    <p>{com.comment}</p>
                }
                {edit && <span onClick={handleClickEdit} className='confirm'><BiMessageCheck/></span>}
                <span onClick={() => setEdit(!edit)} className='edit'>
                    {
                        edit 
                        ?
                        <BiMessageMinus/>
                        :
                        <BiSolidCommentEdit/>
                    }
                    </span>
                <span onClick={() => hdelete(com._id)} className='delete'><RiChatDeleteFill/></span>
            </div>
        :
            <div key={com._id}><p ref={comment}>{com.comment}</p></div>
        }    </>
    )
}
