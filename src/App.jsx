import { useState } from 'react'

import {Home} from './sections/Home';
import {About} from './sections/About';
import {Boat} from './sections/Boat';
import {Cont} from './sections/Cont';
import {WebDev} from './sections/WebDev';
import {Exp} from './sections/Exp';

import { Spring } from 'react-spring';
import React from 'react'
import { Footer } from './sections/Footer';




function App() {

  return (
    <>
    
      <Home/>
      <About/>
      <Exp/>
      <Boat/>
      <WebDev/>
      <Cont/>
      <Footer/>

    </>
  )
}

export default App
