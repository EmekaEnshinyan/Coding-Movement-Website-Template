import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'



function App() {
  
  const [test, setTest] = useState(0)
  return (
    <>
      <div>
        <Header />
        <Content />
        <Footer />
        <div>
          <button onClick={() => setTest((check) => check += 1)}>
            Test Button
          </button>
          <p>
          test pass {test}
          </p>
        </div>
      </div>

    </>
  )
}

export default App
