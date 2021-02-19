import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

function Projects () {
    return (
      <>
      <div className="projects-container" >
        <h1>PROJECTS</h1>  
      </div>
      <div>
        <Cards/>
        <Footer />
      </div>
    </>
    )
}

export default Projects;