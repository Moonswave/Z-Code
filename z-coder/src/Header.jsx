import React from 'react'
import "./assets/Header.css"
import {NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <>
        <div className='Header'>
            <div>
            <img src="./src/assets/logo.png" className='logo' />
            </div>
            <div className='context'> 
                <h2 className='content'>Programs</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Problems</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Calender</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Testimonial</h2>
            </div>
            <div className='butn'>
                <NavLink to={`/login`}>
                <button className='sign'>Login</button>
                </NavLink>
                <NavLink to={`/register`}>
                <button className='register' type='submit'>Register <img src='https://img.icons8.com/?size=100&id=46913&format=png&color=000000' className='arrow'/></button>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Header