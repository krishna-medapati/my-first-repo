import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFirstComponent from './components/myfirstcomponent'
import MySecondComponent from './components/mysecondcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyFirstComponent />
      <MySecondComponent />
    </>
  )
}

export default App