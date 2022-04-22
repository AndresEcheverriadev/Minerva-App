import React from 'react'
import './NosotrosPage.css'

function NosotrosPage() {

  const titleNosostros = `En la mitología romana, Minerva es la diosa de la sabiduría y las artes, además de la protectora de Roma y la patrona de los artesanos.`

  return (
    <div className='nosotrosContainer'>
      <div className='titleContainer'>
        <h3>{titleNosostros}</h3>
      </div>
    </div>
  )
}

export default NosotrosPage