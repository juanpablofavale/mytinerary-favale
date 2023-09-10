import Anchor from '../Anchor/Anchor'
import React from 'react'

export default function BasicNav({links}) {
    
    return (
        <>
            {links.map((link, index) => <Anchor key={index} title={link.title} link={link.link} />)}  
        </>
    )
}
