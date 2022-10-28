import React from 'react'
import KeyBoard from './components/KeyBoard/KeyBoard'
import Calculator from './components/Calculator'


const App: React.FC = () => {
  return (
    <Calculator>
      <KeyBoard />
    </Calculator>
  )
}

export default App
