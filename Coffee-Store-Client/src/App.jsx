import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const [count, setCount] = useState(0)
  const coffees = useLoaderData();
  return (
    <div className="App">
       <h1 className="text-3xl text-center mt-14 font-bold ">
      Hot Hot Cold Coffees {coffees.length}

     
    </h1>
    <div className='grid grid-cols-4 gap-10 px-28 mt-10'>
    {coffees.map(coffee=>
        <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
      )}
    </div>
    
    </div>
  )
}

export default App
