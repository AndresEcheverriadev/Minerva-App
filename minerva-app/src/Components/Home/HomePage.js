import React from 'react'
import HomeBanner from './HomeBanner'
import ItemListContainer from '../../Containers/ItemListContainer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePageContainer'>
        <div className='bannerHomeSection'>
            <HomeBanner/>
        </div>
        <div className='itemListHomeSection'>
            <ItemListContainer/>
        </div>
    </div>

  )
}

export default HomePage