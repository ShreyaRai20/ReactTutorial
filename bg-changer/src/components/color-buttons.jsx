

function ColorButton({btncolor, setColor}) {

  return (
    <div>
      <button onClick={()=> setColor(btncolor)} className="outline-none px-4 rounded-full" style={{backgroundColor:"red"}}>{btncolor}</button>
    </div>
  )
}

export default ColorButton
