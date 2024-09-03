import { useState } from 'react'

import './App.css'
import TextSizeExample from './Components/Test'
import GroupExample from './Components/Group'
import PeerExample from './Components/Peer'
import FlexBoxDemo from './Components/Flexbox'
import GridDemo from './Components/GridBox'
import LayoutDemo from './Components/LayoutDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
<LayoutDemo/> 
    </>
  )
}

export default App
