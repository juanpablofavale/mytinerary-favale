import React from 'react'
import './carousel.css'
import Image from '../Image/Image'

export default function Carousel() {
    return (
        <div className='carousel'>
            <button>{'<='}</button>
            <div className='contenedor'>
                <div>
                    <Image nombre='Imagen' url='../cataratas.jpg' alt='imagen'/>
                    <Image nombre='Imagen' url='../cataratas.jpg' alt='imagen'/>
                </div>
                <div>
                    <Image nombre='Imagen' url='../cataratas.jpg' alt='imagen'/>
                    <Image nombre='Imagen' url='../cataratas.jpg' alt='imagen'/>
                </div>
            </div>
            <button>{'=>'}</button>
        </div>
    )
}