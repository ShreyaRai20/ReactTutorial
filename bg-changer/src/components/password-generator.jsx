import { useState, useCallback, useEffect, useRef } from "react"


function PasswordGenerator() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null)

    // useCallback(arrow function, dependencies)
    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "{}[]+=_-!@#$%^&*()~`"

        for(let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)


    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback( () => {
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password)
    },[password])


    // useEffect(()=> {callback},  Dependencies)

    useEffect(()=> {
        passwordGenerator() //callback
    }, 
    [length, numberAllowed, charAllowed, passwordGenerator]) // Dependencies

  return (
    <>
    
   <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
  <h1 className="text-xl font-bold mb-4 text-center">Password Generator</h1>

  <div className="flex mb-4">
    <input
      type="text"
      value={password}
      className="flex-grow py-2 px-3 rounded-l-lg border border-gray-300 outline-none text-gray-700"
      placeholder="password"
      readOnly
      ref={passwordRef}
    />
    <button 
    onClick={copyPasswordToClipboard}

    className="bg-blue-700 text-white px-4 py-2 rounded-r-lg cursor-pointer hover:bg-blue-800 transition">
      Copy
    </button>
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="length-range" className="text-sm font-medium text-gray-700">
      Length: {length}
    </label>
    <input
      id="length-range"
      type="range"
      min={8}
      max={100}
      value={length}
      onChange={(e) => setLength(Number(e.target.value))}
      className="cursor-pointer w-full"
    />
  </div >
  <div>
    <input
      type="checkbox"
      defaultChecked={numberAllowed}
      id="numberinput"
      onChange={() => {setNumberAllowed((prev) => !prev);
      }}
    />
    <label htmlFor="numberinput" className="text-sm font-medium text-gray-700">
      Numbers
    </label>
  </div>
    <div>
    <input
      type="checkbox"
      defaultChecked={numberAllowed}
      id="charinput"
      onChange={() => {setCharAllowed((prev) => !prev);
      }}
    />
    <label htmlFor="charinput" className="text-sm font-medium text-gray-700">
      Characters
    </label>
  </div>
</div>
    </>
  )
}

export default PasswordGenerator