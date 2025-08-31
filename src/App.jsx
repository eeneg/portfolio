import { useState } from 'react'
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
