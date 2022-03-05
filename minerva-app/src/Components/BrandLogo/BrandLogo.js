import React from 'react'
import './BrandLogo.css'
import logo from './isotipoClaro.png'
// import { SvgComponent as Logo } from './BrandLogo';
// import SvgComponent from './SvgComponent'
// import Logo from './BrandLogo'


function BrandLogo() {
  return (
    <img src={logo} className='brandLogo' alt=""/>
  //  <Logo />
  // <SvgComponent />
  // <Logo />
  )
}

export default BrandLogo