import React from 'react';
import '../../App.css';
import Footer from '../Footer';


function AboutMe () {
    return (
    <>
      <div className="aboutMe-container" >
        <h1>ABOUT ME</h1>  
        <p>Hi, my name's Liam and I'm a web developer who's into all things JavaScript and React. 
        I currently work freelance making websites and split my time between the UK and Croatia.
        I love to learn new things and experiment with different designs and my projects are great examples of that! 
        I'm currently looking for an opportunity to work with a JavaScript framework like React.
        If you'd like to learn more or ask any questions feel free to visit my contact section.</p>
        <p>CONTACT: <br/> EMAIL: liam.wallace@hotmail.co.uk  PHONE NO: +385 976202725</p>
        <p>Technology and Languages: HTML CSS JS React</p>
        </div>
        <div className="aboutMe-container-img">
          <div className="myimage" ></div>
        </div>
      <Footer/>      
    </>
    )
}

export default AboutMe;