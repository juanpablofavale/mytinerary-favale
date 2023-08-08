import React from 'react'
import './footer.css'
import Anchor from '../Anchor/Anchor'
import NavBar from '../NavBar/NavBarMain'

export default function Footer({net, links}) {
  return (
    <footer>
      <div className='cont'>
        <div className='address'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.678346689863!2d-62.211443700000004!3d-38.7022322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda3836ea5cd09%3A0x789001fd93b1fb0f!2sWashington%203800%2C%20B8002DRF%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1691453033043!5m2!1ses-419!2sar"></iframe>
          <p>Washington 3800, CP 8000, Bahia Blanca, Buenos Aires</p>
        </div>
        <div className='socNetLnk'>
          <h2>MyTinerary</h2>
          <div className='sNet'>
            {net.map((net, index) => <Anchor key={index} title={net.title} link={net.link} />)}
          </div>
        </div>
        <NavBar links={links}/>
      </div>
      <p>© 2023 by Juan Pablo Favale</p>
    </footer>
  )
}
