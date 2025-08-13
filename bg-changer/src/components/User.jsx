import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
  return (
    <div className='dark:bg-black dark:text-white'>
      User:{id}
    </div>
  )
}

export default User
