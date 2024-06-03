import React from 'react'
import imagen from '../image/pcLogo.png'

export const LogoPc = () => {
  return (
    <div className='pc-logo-contenedor'>
         <img 
                className='pc-logo'
                src={imagen}
            />   
    </div>
  )
}
