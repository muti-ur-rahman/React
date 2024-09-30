import React from 'react'
// import PasswordGenerator from './components/passGen'
import './App.css'
import PGen from './components/05PGen'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col '>
      <div className=' bg-teal-500 text-4xl'>Password Generator</div>
      <div className='bg-yellow-500 text-2xl text-center'>Craft Unique Passwords That Are Easy to Remember!</div>
      </div>
      <div className='h-1/2 bg-blue-500'>
      {/* <PasswordGenerator/> */}
      <PGen/>
      </div>
    </>
  )
}

export default App

