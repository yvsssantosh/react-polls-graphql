import React from 'react'
import reactLogo from '../assets/react-logo.svg'
import Polls from './Polls'
import '../App.css'

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <img src={reactLogo} className='logo' alt='React Logo' />
        <h1 className='name'>Polls API</h1>
      </header>
      <main className='main'>
        <Polls />
      </main>

    </div>
  )
}

export default App
