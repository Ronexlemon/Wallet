import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen flex justify-center  ">
      <Home/>
      </div>
  )
}

export default App
