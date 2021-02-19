import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src="/images/codevid.mp4.mp4" autoPlay loop muted />
            <h1>FRONT-END DEVELOPER</h1>
            <p>Creating websites and small applications. Specialising in efficient design and smooth UI.</p>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle="btn--outline" buttonSize="btn--large">
                    START NOW
                </Button>
            </div>
        </div>
    )
}

export default Hero
