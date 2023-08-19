import React from 'react'
import './notFound.css'

export default function NotFound() {
  document.title = "MyTinerary - 404 Not Found"
  return (
    <main className='pg404'>
        <div className='hero'>
            <img src="../404.png" alt="404" />
            <h2>Page Not Found</h2>
        </div>
    </main>
  )
}