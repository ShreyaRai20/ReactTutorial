import { useRef, useState } from "react"


function UnControlledForm() {
     // firstname, lastname, email, password, confirm password, mobile number

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const mobileNumberRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [formOutput, setFormOutput] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormOutput(
            `firstname: ${firstnameRef.current.value}, 
             lastname: ${lastnameRef.current.value}, 
             email: ${emailRef.current.value}, 
             mobileNumber: ${mobileNumberRef.current.value}, 
             password: ${passwordRef.current.value}, 
             confirmPassword: ${confirmPasswordRef.current.value}`
        )
        firstnameRef.current.value=''
        lastnameRef.current.value=''
        emailRef.current.value=''
        mobileNumberRef.current.value=''
        passwordRef.current.value=''
        confirmPasswordRef.current.value=''
    }
  return (
    <>
    <form className="bg-amber-700" onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>UnControlled Form</h1>
        <input type="text" placeholder="firtname" ref={firstnameRef} />
        <input type="text" placeholder="lastname" ref={lastnameRef} />
        <input type="text" placeholder="email" ref={emailRef}/>
        <input type="text" placeholder="mobile number" ref={mobileNumberRef} />
        <input type="text" placeholder="password" ref={passwordRef}/>
        <input type="text" placeholder="confirm password" ref={confirmPasswordRef}/>
        <button className="bg-green-500 cursor-pointer">Submit</button>
    </form>
    <h1>
        {formOutput}
    </h1>
    </>
  )
}

export default UnControlledForm
