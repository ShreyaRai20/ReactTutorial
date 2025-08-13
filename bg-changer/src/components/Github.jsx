import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/ShreyaRai20') 
    //      .then((res) => res.json())
    //      .then(data => {
    //         setData(data)
    //         console.log(data);
    //      })
    // },[])

  return (
    <div className='dark:bg-black dark:text-white'>
      Git Followers: {data.followers}
      <img src={data.avatar_url}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ShreyaRai20') 
    return response.json()
}
