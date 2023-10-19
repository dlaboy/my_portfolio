import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useSpring, useTransition , animated } from 'react-spring'


import './Exp.css'



export  function Exp() {
  const [isHovered,setIsHovered] = useState(false);
  const [isHovered1,setIsHovered1] = useState(false);
  const [isHovered2,setIsHovered2] = useState(false);

  const [position, setPosition] = useState({x:0,y:0});
  const [position1, setPosition1] = useState({x:0,y:0});
  const [position2, setPosition2] = useState({x:0,y:0});
  

  const cardAnimation = useSpring({
    borderColor: isHovered ? 'white' : 'transparent',
    borderStyle: isHovered ? 'solid' : 'none',
    transform: `scale(${isHovered ? 1.15 : 1}) translate(${position.x}px,${position.y}px)`,
  })

  const cardAnimation1 = useSpring({
    borderColor: isHovered1 ? 'white' : 'transparent',
    borderStyle: isHovered1? 'solid' : 'none',
    transform: `scale(${isHovered1 ? 1.15 : 1}) translate(${position1.x}px,${position1.y}px)`,
  })

  const cardAnimation2 = useSpring({
    borderColor: isHovered2 ? 'white' : 'transparent',
    borderStyle: isHovered2 ? 'solid' : 'none',
    transform: `scale(${isHovered2 ? 1.15 : 1}) translate(${position2.x}px,${position2.y}px)`,
  })

  const handleMouseMove = (e) => {
    const {  left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10; // Adjust the sensitivity
    const y = (e.clientY - top - height / 2) / 10; // Adjust the sensitivity
    setPosition({x,y})
  }

  const handleMouseMove1 = (e) => {
    const {  left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10; // Adjust the sensitivity
    const y = (e.clientY - top - height / 2) / 10; // Adjust the sensitivity
    setPosition1({x,y})
  }

  const handleMouseMove2 = (e) => {
    const {  left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10; // Adjust the sensitivity
    const y = (e.clientY - top - height / 2) / 10; // Adjust the sensitivity
    setPosition2({x,y})
  }



  const [resumeLoading, setResumeLoading] = useState(false);

 
  const handleFileDownload = () => {
    setResumeLoading(true)
    const fileUrl = 'https://drive.google.com/file/d/1DGK48wLl5X69uFkYCX3tw3qwxDy1os3C/view?usp=sharing';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Laboy_Diego_Resume';
    // anchor.click();

    window.open(fileUrl, '_blank');
    setResumeLoading(false)
  }

  return (
    <div id='exp' className="containerr d-flex justify-content-center align-items-center">


      <div id="resume" className="city cv d-flex flex-column align-items-center shadow bg-body-tertiary rounded-4">
        {/* <div className=" first row d-flex flex-column  w-100">
          <div className="col d-flex w-100 justify-content-center fw-bolder">
            <h1 className="mt-5 exp-header fw-normal ">Experience</h1>
          </div>
        
        
        </div> */}
        <div className="row d-flex flex-md-row flex-column h-100 w-100 justify-content-center align-items-center text-dark">
          <div className="col d-flex flex-column front justify-content-center align-items-center border-end">
            <div className="col text-center">
              <img className='exp-images' src="./website.png" alt="" />
              <h3 className='mt-3 fw-bold'>Front End</h3>
            </div>
            <div className="col w-100 d-flex flex-column align-items-center">
              <div className=""><h4 className='text fw-bold'>Languages</h4></div>
                   
              <ul className='list-unstyled text-center d-flex  flex-column w-100 justify-content-around'>
                <li><h5>HTML</h5></li>
                <li><h5>CSS</h5></li>
                <li><h5>JavaScript</h5></li>
              </ul>
            </div>
            <div className="col w-100 d-flex flex-column align-items-center">
              <div className=""><h4 className='text fw-bold'>Dev Tools</h4></div>
            
              <ul className='list-unstyled text-center  flex-column w-100 justify-content-around'>
                <li><h5>React</h5></li>
                <li><h5>Boostrap</h5></li>
                <li><h5>
                Figma (UI Design)
                  </h5></li>
              </ul>

            </div>
          </div>
          <div className="col d-flex flex-column back justify-content-center align-items-center border-end ">
            <div className="col text-center">
                <img  className="exp-images"src="./database.png" alt="" />
                <h3 className='mt-3 fw-bold'>Back End</h3>
            </div>
      
            <div className="col w-100 d-flex flex-column align-items-center h-100">
              <div className=""><h4 className='text fw-bold'>Languages</h4></div>
                   
              <ul className='list-unstyled text-center flex-lg-row flex-column w-100 justify-content-around'>
                <li><h5>Python</h5></li>
                <li><h5>Java</h5></li>
                <li><h5>JavaScript</h5></li>
                <li><h5>C++</h5></li>
                <li><h5>PHP</h5></li>
                <li><h5>SQL</h5></li>
              </ul>
            </div>
            <div className="col w-100 d-flex flex-column align-items-center h-100">
              <div className=""><h4 className='text fw-bold'>Dev Tools</h4></div>
            
              <ul className='list-unstyled text-center d-flex  flex-column w-100 justify-content-around'>
                <li><h5>Django</h5></li>
                <li><h5> Express</h5></li>
                <li><h5> NodeJS</h5></li>
                <li><h5> Flask</h5></li>
                <li><h5> MongoDB</h5></li>
                <li><h5> Github</h5></li>
              
              </ul>

            </div>
          </div>   

        
          

        </div>
          <div className="row d-flex  justify-content-center mt-5 mb-5 ">
              <button onClick={handleFileDownload} className="download border-0 p-3   shadow h-100 ">
                {resumeLoading ? (<>Redirecting</>): (<>Download CV</>) }
              </button>
          </div>
        </div>
      </div>
    
    
  )
}
