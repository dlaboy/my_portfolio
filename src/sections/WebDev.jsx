import React, { useEffect, useState, useRef } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useSpring, useTransition , animated } from 'react-spring'


import './WebDev.css'

const backImage = [
  '/O.png',
  '/CI.png',
  '/GCS.png'
]


export  function WebDev() {
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
    const fileUrl = 'https://drive.google.com/file/d/1vjy9TmVKHhsbXiog5l709ZC_ZFrSe9Ck/view?usp=drive_link';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Laboy_Diego_Resume';
    // anchor.click();

    window.open(fileUrl, '_blank');
    setResumeLoading(false)
  }

  return (
    <div id="webdev" className=" webdev d-flex justify-content-center align-items-center flex-column ">


      <div className="head row text-center d-flex flex-column  m-3 w-100 ">
           
           <div className="col saludo fw-bolder">
               <h2 className="fw-bolder">My Work: Web Development</h2>
           </div>
           <div className="col">
               <p>
                   Take a look at my work! 
                   
               </p>
           </div>

      </div>
      <div className=" w-100 d-flex align-items-center justify-content-center flex-column ">

        <div className="tarjetas  d-flex   flex-wrap h-100 justify-content-around pt-5 w-75 ">
          <animated.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setPosition({x:0,y:0})
            }}
            onMouseMove={handleMouseMove}
            style={
            cardAnimation
            }
          
          
          >
            <div id='tarjee' className="  card text-center d-flex flex-column align-items-center shadow justify-content-center"  >
              { isHovered ? <div className="proj-back orthocare-back w-100 card-body  d-flex justify-content-center align-items-center flex-column ">
                  <div className="text-light m-1">
                    Landing page for emerging orthopedics company. Created logo and color palette from scratch. Integrated Professional Emails and Hosting. 
                  </div>
                  <div className="">
                    <img src="/tools/html-5.png" alt="" className='tools m-1'/>
                    <img src="/tools/css-3.png" alt="" className='tools m-1'/>
                    <img src="/tools/js.png" alt="" className='tools m-1'/>
                    <img src="/tools/namecheap-removebg-preview.png" alt="" className='tools m-1'/>
                    <img src="/tools/blue.png" alt="" className='tools m-1'/>
                  </div>
                  <a href="https://orthocare.life/"><button className='btn btn-outline-light mt-1 rounded-0'>Visit website</button></a>

                  
                </div> : <div className="orthocare w-100 card-body  d-flex justify-content-center align-items-center flex-column">
                  <img src="/orthocare_logos/logoo8.png" className="card-img-top web-images " alt="..."/>
                  <h3 className='orthocare-name'>ORTHOCARE</h3>
                </div>  }
               

               
            </div>

          </animated.div>
          <animated.div
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => {
              setIsHovered1(false);
              setPosition1({x:0,y:0})
            }}
            onMouseMove={handleMouseMove1}
            style={
            cardAnimation1
            }
          
          
          >
            <div id='tarjee' className="card text-center d-flex flex-column align-items-center shadow "  >
              { isHovered1 ? <div className="proj-back gcs-back w-100 card-body  d-flex justify-content-center align-items-center flex-column ">
                  <div className="text-light m-1">
                    Web application to serve as a Ground Control Station for the ASV at RoboNation's Roboboat Competition. To monitor and control ASV in real-time. Constantly improving! 
                  </div>
                  <div className="">
                    <img src="/tools/html-5.png" alt="" className='tools m-1'/>
                    <img src="/tools/css-3.png" alt="" className='tools m-1'/>
                    <img src="/tools/js.png" alt="" className='tools m-1'/>
                    <img src="/tools/mapbox.png" alt="" className='tools m-1'/>
                    <img src="/tools/flask-removebg-preview.png" alt="" className='tools m-1'/>
                  </div>

                  {/* <a href="https://orthocare.life/"><button className='btn btn-outline-light mt-1 rounded-0'>See current version</button></a> */}
                  
                </div> : <div className="gcs w-100 card-body  d-flex justify-content-center align-items-center flex-column">
                <img src="/boat(1).png" className="card-img-top gcs-image m-3" alt="..."/>
                <h3 className='text-light'>GCS</h3>
              </div> }
               
            </div>
          </animated.div>
          <animated.div
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => {
              setIsHovered2(false);
              setPosition2({x:0,y:0})
            }}
            onMouseMove={handleMouseMove2}
            style={
            cardAnimation2
            }
          
          
          >
            <div id='tarjee' className="  card text-center d-flex flex-column align-items-center shadow "  >
                { isHovered2 ? <div className="proj-back oasis-back w-100 card-body  d-flex justify-content-center align-items-center flex-column ">
                  <div className="text-light m-1">
                    Self ordering app project with authentification and payment integrated for 'Heladeria Oasis'. Order your ice cream from anywhere!
                  </div>
                  <div className="">
                    <img src="/tools/library.png" alt="" className='tools m-1'/>
                    <img src="/tools/django-removebg-preview.png" alt="" className='tools m-1'/>
                    <img src="/tools/heroku-removebg-preview.png" alt="" className='tools m-1'/>
                  </div>
                  {/* <a href="https://orthocare.life/"><button className='btn btn-outline-light mt-1 rounded-0'>See more</button></a> */}
            
                  
                  </div> : <div className="oasis w-100 card-body  d-flex justify-content-center align-items-center flex-column">
                  <img src="/ice-cream(1).png" className="card-img-top web-images m-3" alt="..."/>
                  <h3 className='text-light'>OASIS</h3>

                </div> }
            </div>
          </animated.div>
          </div>
          </div>
     
    </div>
  )
}
