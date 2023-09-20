import { useState } from 'react'

import {Home} from './sections/Home';
import {About} from './sections/About';
import {Boat} from './sections/Boat';
import {Cont} from './sections/Cont';
import {WebDev} from './sections/WebDev';
import {Exp} from './sections/Exp';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About/>
      <Exp/>
      <Boat/>
      <WebDev/>
      <Cont/>

    </>
  )
}

export default App
