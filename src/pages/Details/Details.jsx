import React, { useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'


export default function Details() {
  const {id} = useParams()
  return (
    <>
    <main className='pgDetails'>
      <div className="hero">
        <h2>ID: {id}</h2>
        <div>Details</div>
      </div>
    </main>
    </>
  )
}