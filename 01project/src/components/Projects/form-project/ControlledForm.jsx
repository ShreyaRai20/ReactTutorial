import { useState } from "react"


function ControlledForm() {
     // firstname, lastname, email, password, confirm password, mobile number

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formOutput, setFormOutput] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()

        setFormOutput(`firstname : ${firstname}, lastname: ${lastname},email: ${email},mobileNumber: ${mobileNumber},password: ${password},confirmPassword: ${confirmPassword}`)

        setFirstname('')
        setLastname('')
        setEmail('')
        setMobileNumber('')
        setConfirmPassword('')
        setPassword()
    }
  return (
    <>
    <form className="bg-amber-700" onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>Controlled Form</h1>
        <input type="text" placeholder="firtname" onChange={(e)=>{setFirstname(()=>e.target.value)}}/>
        <input type="text" placeholder="lastname" onChange={(e)=>{setLastname(()=>e.target.value)}}/>
        <input type="text" placeholder="email" onChange={(e)=>{setEmail(()=>e.target.value)}}/>
        <input type="text" placeholder="mobile number" onChange={(e)=>{setMobileNumber(()=>e.target.value)}}/>
        <input type="text" placeholder="password" onChange={(e)=>{setPassword(()=>e.target.value)}}/>
        <input type="text" placeholder="confirm password" onChange={(e)=>{setConfirmPassword(()=>e.target.value)}}/>
        <button className="bg-green-500 cursor-pointer">Submit</button>
    </form>
    <h1>{formOutput}</h1>
    </>
  )
}

export default ControlledForm
