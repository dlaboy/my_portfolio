import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../components/MyHead.css'
import './About.css'

export  function About() {
  return (
    <Row className='about-me d-flex flex-md-row flex-column shadow-lg'>
      <Col className='image d-flex justify-content-center align-items-center'>
      </Col>
      <Col className='m-3 col text-start d-flex flex-column'>
        <Col className='textou col fw-bolder'>
            <h1 class="saludo fw-bolder mb-5 mt-5">About Me</h1>
            <h5 class="te">
              I'm a 5th year software engineering student seeking for experience
              to expand my technical and professional skills. Passionate for
              developing user friendly and interactive <span class="saludo fw-bolder fs-4">Web Applications</span> .  For the last <span class="saludo fw-bolder fs-4">2</span> years I have adquired technical skills to
              develop applications from scratch.
            </h5>
        </Col>
        <Col className='textou  text-start mt-5 mb-5'>
          <Col>
          <h4 class="fw-bolder">My interests</h4>
          </Col>
          <Col className='mt-4'>
            <Col className='d-flex flex-column flex-sm-row  justify-content-around'>
              <p>Sports</p>
              <p>Music</p>
              <p>Movies</p>
              <p>Family oriented</p>
            </Col>

          </Col>
        </Col>
      </Col>
    </Row>
    
  )
}
