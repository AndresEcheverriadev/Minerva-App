import React from 'react';
import './HomeBanner.css';
import bannerHome from '../../Assets/bannerHome.jpg' 

function HomeBanner() {

    const titleHome1 = `Crea tu propio estilo.`
    const titleHome2 = `Sé tu propia Diosa.`

  return (
    <div className='homeBannerContainer'>
        <div className='homeBannerImgContainer'>
            <img className='homeBannerImg' src={bannerHome}></img>
            <div className='homeBannerTxt'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-up iconText" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                </svg>
                <div className='titHome'>{titleHome1}</div>
                <div className='titHome'>{titleHome2}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down iconText" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner