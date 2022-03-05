import React from 'react';
import './BrandLogo.css';
import logo from './logo.svg';

function BrandLogo() {
  return (
    <img src={logo} className='brandLogo' alt="Minerva logo"/>
  )
}

export default BrandLogo