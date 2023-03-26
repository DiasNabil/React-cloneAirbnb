import React from 'react'
import './Hero.css'
import photos from '../assets/Group 77.png'

export default function Hero (){
    return (
        <section className="hero-section">
            <div className="img-section"><img className='photos' src={photos} alt=""/></div>
            <h1 className='title'>Online Experiences</h1>
            <p className='text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}