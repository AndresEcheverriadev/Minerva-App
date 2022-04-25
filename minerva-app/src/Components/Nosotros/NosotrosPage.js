import React from 'react'
import './NosotrosPage.css'
import titConcept1 from './conceptsImgs1.jpg'
import titConcept2 from './conceptsImgs2.jpg'
import titConcept3 from './conceptsImgs3.jpg'
import statue3d from './Minerva3d.png'

function NosotrosPage() {

  const titleNosostros = `En la mitología romana, Minerva es la diosa de la sabiduría y las artes, 
  además de la protectora de Roma y la patrona de los artesanos.
  En la mayoría de las culturas, las joyas son vistas como un símbolismo de riqueza.
  Nosotros creemos que puede ser mucho mas que eso. Nosotros creemos que tú puedes ser mucho mas que eso.`

  return (
    <div className='nosotrosContainer'>
      <div className='titleContainer'>
        <h5>{titleNosostros}</h5>
      </div>
      <div className='statueContainer'>
        <img className='statue3d' src={statue3d}></img>
      </div>
      <div className='conceptsContainer'>
        <div className='concept1'><h4 className='titConcept1'>Identidad</h4><img className='conceptImg' src={titConcept1}></img></div>
        <div className='concept2'><h4 className='titConcept2'>Energía</h4><img className='conceptImg' src={titConcept2}></img></div>
        <div className='concept3'><h4 className='titConcept3'>Poder</h4><img className='conceptImg' src={titConcept3}></img></div>
      </div>
    </div>
  )
}

export default NosotrosPage