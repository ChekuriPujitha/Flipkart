import React from 'react'
import logo from '../Image/logo.jpg'

export default function Header() {
  return (
    <>
    <div  className='col-md-3 side' >
        <div className='logodiv' style={{display:'flex',height:'100px',width:'200px'}}>
            <i class="fa-solid fa-bars" style={{color:'white'}}></i>
            <img src={logo} alt='no alt' style={{width: '120px', height: '120px',padding:'30px',margin:'20px'}}/>
        </div>
        <div class='searchbar'></div>

    </div>
    </>
  )
}