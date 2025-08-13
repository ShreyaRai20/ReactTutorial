import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div className='dark:bg-black dark:text-white'>please Login</div>
  return <div className='dark:bg-black dark:text-white'> Welcome {user.username}</div>
}

export default Profile
