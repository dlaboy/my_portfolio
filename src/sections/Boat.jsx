import React, { useEffect, useState } from 'react'
import { useSpring, useTransition , animated } from '@react-spring/web'
import { Deck } from '../components/Deck'
import './Boat.css'


export function Boat() {

  
 

  
  return (
    <div id="roboboat" className="d-flex flex-column flex-lg-row container  ">
        <div className="robo-text row d-flex flex-column text-start h-100  w-50 w-auto mt-5 mb-5">
              <h1 className="fw-bolder saludo text-center mb-5">UPRM Roboboat Team</h1>
            <div className="col h-75 d-flex flex-column text-start pb-5">
                <div className="col d-flex flex-row text-secondary">
                    <h5 className="ache saludo me-5">
                        •	
                    </h5>

                    <h5 className='ache'>
                        Represented team on <span className="ache saludo fw-bolder ">RoboNation’s Roboboat Competition</span> in March 2023. 
                    </h5>
                </div>
                <div className="col d-flex flex-row text-secondary">
                    <h5 className="ache saludo me-5">
                        •	
                    </h5>

                    <h5 className='ache'>Developed <span className="saludo fw-bolder ache">Ground Control Station</span> to monitor and communicate with ASV. </h5>
                </div>
                <div className="col d-flex flex-row text-secondary">
                    <h5 className="ache saludo me-5">
                        •	
                    </h5>

                    <h5 className='ache'>Tested ASV’s <span className="ache saludo fw-bolder fs-4">Network</span> strategy for competition on Raspberry Pi, Jetson TX2 and Ground Station.</h5>

                </div>
                <div className="col d-flex flex-row text-secondary">
                    <h5 className="ache saludo me-5">
                        •	
                    </h5>

                    <h5 className='ache'>Experienced working in <span className=" ache saludo fw-bolder ">Agile Methodology</span> approach.</h5>

                </div>
                <div className="col d-flex flex-row text-secondary">
                    <h5 className="ache saludo me-5  ">
                        •	
                    </h5>

                    <h5 className='ache'>Implemented basic <span className="ache saludo fw-bolder ">Image Processing</span> and <span className="ache saludo fw-bolder ">Machine Learning</span> concepts.</h5>
                </div>
                
             
            </div>
            
        </div> 
        <div className='deck-wrapper w-100 w-md-50 d-flex justify-content-center '>
          <Deck />

        </div>
       
       
      </div>
  )
}
