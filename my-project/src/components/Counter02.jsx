import { useEffect } from "react"


function Counter02({ number }) {
    useEffect(() => {
        console.log("counter mounting...")
        return () => {
            console.log("counter02 removed")
        }
    }, [number])

    return (
        <div>
            {number}
        </div>
    )
}

export default Counter02
