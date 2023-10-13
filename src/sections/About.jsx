import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../components/MyHead.css'
import './About.css'

export  function About() {
  return (
    <Row className='about-me d-flex text-center shadow-lg justify-content-center '>
     
        <Col className='textou col fw-bolder d-flex justify-content-center align-items center flex-column'>
            <h1 className=" fw-bolder mb-5 mt-5">A little bit about me...</h1>
            <div className="text-container w-100  d-flex justify-content-center align-items-center">
              <h5 className="te ">
                I'm a 5th year software engineering student seeking for experience
                to expand my technical and professional skills. Passionate for
                developing user friendly and interactive <span className=" fw-bolder fs-4">Web Applications</span> .  For the last <span className=" fw-bolder fs-4">2</span> years I have adquired technical skills to
                develop applications from scratch.
              </h5>

            </div>
        </Col>
    </Row>
    
  )
}
