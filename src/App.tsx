import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import Calc from './components/Calc/Calc'
import { usersSlice } from './store/reducers/UsersSlice'
import Calculator from './components/Calculator'


// function App() {
const App: React.FC = () => {
  const { increment } = usersSlice.actions
  const dispatch = useAppDispatch()


  return (
    <Calculator>
      <Calc />
    </Calculator>
  )
    
   
}

export default App
