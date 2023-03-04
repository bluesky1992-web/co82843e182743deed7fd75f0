import React from 'react'

export default function Info() {
    return (
        <header className='header'>
            <img src='../images/IMG.jpg' className='image' />
            <h1>Ali Ibrahim</h1>
            <h3>Frontend Developer</h3>
            <h5>aliibrahim.website</h5>
            <div className='btn-container'>
                <button className='btn'><i className="fa-solid fa-envelope"></i>Email</button>
                <button className='btn' id='blue-background' ><i className="fa-brands fa-linkedin"></i>inkedIn</button>
            </div>
        </header>
    )
}