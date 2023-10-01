import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './Exp.css'

export  function Exp() {
  return (
    <Row className='city resume cv d-flex flex-column align-items-center shadow'>
      <div className=' first d-flex flex-column  w-100'>
        <div className='d-flex w-100 justify-content-center fw-bolder'>
          <h1 className="m-5 fw-bolder text-light">Experience</h1>
        </div> 
      </div>
      <div className=' w-100 d-flex align-items-center justify-content-center flex-column '>
        <div className="tarjetas row d-flex  flex-xl-wrap w-75 h-100 justify-content-around pt-5 ">
              <div className=" tar card text-center d-flex flex-column align-items-center shadow text-light"  >
                  <img src="/cruise(1).png" className="card-img-top web m-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">UPRM Roboboat </h5>
                    <p className="card-text">2022-Present</p>
                  </div>
              </div>
              <div className="m-1 tar card text-center d-flex flex-column align-items-center shadow text-light" >
                  <img src="/web-development(2).png" className="card-img-top web m-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p>2021-Present</p>
                  
                  </div>
              </div>
              <div className=" tar card text-center d-flex flex-column align-items-center shadow text-light" >
                  <img src="/wifi.png" className="card-img-top web m-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Networks</h5>
                    <p>2022-Present</p>
                  </div>
              </div>
              
              
        </div>
      </div>

    </Row>
    
  )
}
