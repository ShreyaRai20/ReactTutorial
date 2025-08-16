


function Card() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-50'>
      <div className= 'w-80 h-[26rem] rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col'>
        Card
        <h2 className="font-bold text-[10px">My Component</h2>
        <p className="text-neutral-600 mt-2 text-[10px]">
            a collection cute UI
        </p>
        <div className="flex items-center justify-center">
            <button className="flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fca.linkedin.com%2Fcompany%2Fm.y.-capital-management-corp&psig=AOvVaw28oX0VglGAlTq-w74ixqtL&ust=1755389390614000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLiTzaGFjo8DFQAAAAAdAAAAABAE"/>
                hey
                <span className="h-3 w-3 text-neutral-400">X</span>
            </button>
        </div>
        <div className=" bg-gray-50 flex-1 mt-4 rounded-l border border-dashed border-neutral-200 relative">
            <div className="absolute inset-0 h-full bg-white rounded-lg divide-y divide-neutral">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card

// class name utility
