import React from 'react'
import Nicolle from "/src/images/eu4.jpg"
import Email from "/src/images/e-mail-icon.png"
import Linkedin from "/src/images/linkedin-icon.png"

function Info() {
   return (
    <div className='container-info'>
        <img src={Nicolle} className='picture'></img>
        <h1 className='name'>Nicolle Santi</h1>
        <p className='profession'>Frontend Developer</p>
        <div className='buttons'>
          <a className='e-mail-button' href='mailto:nicollesanti@gmail.com' target='blank'><img src={Email}/>E-mail</a>
          <a className='linkedin-button' href='https://www.linkedin.com/in/nicolle-santi/' target='blank'><img src={Linkedin}/>Linkedin</a>
        </div>
    </div>
  )
}

export default Info