import React from 'react';
import {Form,Button} from 'react-bootstrap';
import './Footer.css';


function Footer() {
  return (
<footer className="footer">

<div className='footerLogoContainer'><img src='https://firebasestorage.googleapis.com/v0/b/minerva-e-commerce.appspot.com/o/footerLogo.png?alt=media&token=ab91e7e3-c1cb-476b-896a-5592ab38e74b'></img></div>
      
<Form className='formContainer'>
    <div className='formTextContainer'>
        <Form.Label className='formText'>Suscríbete a nuestro newsletter</Form.Label>
    </div>
    <Form.Control className='formInput' type="email" placeholder="Tu correo" />
    <div className='formBtnContainer'>
        <Button className='formBtn' variant="secondary" type="submit">Suscribirse</Button>
    </div>
</Form>

<div className="text-center p-3 copyrightContainer" style={{color:'rgba(255,255,255,.55)'}}>© 2022 Copyright Minerva</div>

</footer>  )
}

export default Footer