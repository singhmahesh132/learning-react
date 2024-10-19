import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    name: 'Mahesh',
    age: '29',
    address: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India'
    }
  }

  let newArr = [1,2,3,4,56,7]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with TailWind CSS</h1> 
      
      {/* Passing an element like username, designation and location in the Card tag is called as props. We can then consume this values in the Card function*/}
      <Card username="Mahesh Singh" designation="Senior Java Developer" location="Mumbai, Maharashtra, India"/>
      <Card username='Mahesh' location="Mumbai" myArr={newArr}/>
      <Card/>
    </>
  )
}

export default App
