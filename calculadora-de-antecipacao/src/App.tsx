import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Dashboard/>
    </div>
  )
}

export default App
