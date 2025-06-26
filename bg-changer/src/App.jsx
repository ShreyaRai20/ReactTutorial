import { useState } from "react"
import Currency from "./components/currency"


function App() {
  const [color, setColor] = useState('olive')


  return (
    <>
    
    <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={()=> setColor("red")} className="outline-none px-4 rounded-full" style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 rounded-full" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 rounded-full" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=> setColor("white")} className="outline-none px-4 rounded-full" style={{backgroundColor:"white"}}>white</button>
          <button onClick={()=> setColor("black")} className="outline-none px-4 rounded-full" style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
