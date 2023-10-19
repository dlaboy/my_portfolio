import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useSpring, animated } from '@react-spring/web';


import './MyHead.css'

export  function MyHead() {
  const styles = useSpring({
    from: { transform: 'translateX(-1000px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 1000 },
  
  })
  return (
    <animated.div style={styles}>

    <div className='bg-light'>
    <Container className='d-flex flex-md-row flex-column justify-content-around align-items-center landing'  >
      <Row className='d-flex flex-column text-center '>
      <Col><h1 className='saludo fw-bolder'>Hello,</h1></Col>
      <Col>
        <h1>
          I'm Diego Laboy
        </h1>
      </Col> 
      <Col>
        <p>
        Software Engineering Student
        </p>
      </Col>
      </Row>
      <Row>
        <Col>
          <Image className='profile-image' src='./thumbnail_IMG-0637.jpg' roundedCircle/>
        </Col>
      </Row>
    </Container>
    
    
    </div>
    </animated.div>
  )
}
