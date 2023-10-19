import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './About.css'

export  function About() {
  return (
    <Row id='about' className='about-me d-flex text-center shadow-lg justify-content-center '>
     
        <Col className='textou col fw-bolder d-flex justify-content-center align-items center flex-column'>
            <h1 className=" fw-bolder acheuno mb-4">A little bit about me...</h1>
            <div className="text-container w-100  d-flex justify-content-center align-items-center">
              <h5 className="achecinco">
                I'm a 5th year software engineering student seeking for experience
                to expand my technical and professional skills. Passionate for
                developing user friendly and interactive <span className=" fw-bolder ">Web Applications</span> .  For the last <span className=" fw-bolder ">2</span> years I have adquired technical skills to
                develop applications from scratch.
              </h5>

            </div>
        </Col>
    </Row>
    
  )
}
