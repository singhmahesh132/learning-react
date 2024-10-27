import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  const [color, setColor] = useState('olive')

  let addValue = () => {
    setCount(count + 1)
    console.log(count)
  }

  const changeColor = (color) => {
    console.log(color)
    setColor(color)
  } 

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none text-black py-2 px-3 rounded-full shadow-lg' onClick={() => changeColor('red')} style={{backgroundColor: 'red'}}>Red</button>
            {/*I can save time by using below style to update color by directly using setColor function instead of userdefined function which internally called setColor()*/}
            <button className='outline-none text-black py-2 px-3 rounded-full shadow-lg' onClick={() => setColor('olive')} style={{backgroundColor: 'olive'}}>Olive</button>

            <button className='outline-none text-black py-2 px-3 rounded-full shadow-lg' onClick={() => addValue()}>Test {count}</button>
            {/*I can save time by using below style to update count by directly using setCount function instead of userdefined function which internally called setCount()*/}
            <button className='outline-none text-black py-2 px-3 rounded-full shadow-lg' onClick={() => setCount(count+1)}>Test {count}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
