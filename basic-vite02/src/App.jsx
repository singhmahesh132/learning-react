import './App.css'
import {useState} from 'react'

function App() {

  //this counter maintains just its own state and does not mainatain entire state
  //i.e. when we update counter only value in console is changed but value of counter in h1 tag remains the same.
  //let counter = 15

  //I can write function in two ways using function or const
  /*function addValue() {
    counter = counter + 1
    console.log(counter)
  }

  const subValue = () =>{
    counter = counter - 1
    console.log(counter)
  }*/
  //Both above will be treated as a function

  //Instead to maintain single state in all the parts where variable is decalared we use react's useState.
  //It was used to solve ghostState problem in facebook.
  const [counter, setCounter] = useState(15)

  const addValue = () =>{
    setCounter(counter + 1)
    /* Interview Hack
    if we execute below in the same function then due to react batching whole will be treates as one
    and only a single increment will be done even though we have written 3 statements to do so.
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    so in this case we use call back function where in batching is no more applicable and each function waits
    for the updated value of the counter. here the value will be updated thrice and new value will be +3
    setcounter((prevCounter) => preCounter + 1)
    setcounter((prevCounter) => preCounter + 1)
    setcounter((prevCounter) => preCounter + 1)
    */
    console.log(counter)
  }

  const subValue = () =>{
    setCounter(counter - 1)
    console.log(counter)
  }

  return (
    <>
    <h1>React course 02</h1>
    <h1>Counter Value : {counter} </h1>
    <button onClick={addValue}>add value</button> {" "}
    <button onClick={subValue}>remove value</button>
    <p>footer : </p>
    </>
  )
}

export default App
