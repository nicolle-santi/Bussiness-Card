import React from 'react'
import Facebook from "/src/images/Facebook-icon.png"
import Instagram from "/src/images/Instagram-icon.png"
import GitHub from "/src/images/GitHub-icon.png"

function Footer() {
  return (
    <div className='container-footer'>
        <a href='https://www.facebook.com/nicollesanti/' target='blank'><img src={Facebook} className='icons'/></a>
        <a href='https://www.instagram.com/nikkisanti/' target='blank'><img src={Instagram} className='icons'/></a>
        <a href='https://github.com/nicolle-santi' target='blank'><img src={GitHub} className='icons'/></a>
    </div>
  )
}

export default Footer