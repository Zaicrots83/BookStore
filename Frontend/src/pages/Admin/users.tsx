import { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar'
import Styles from '../../Styles/Admin/AdminUsers.module.css'

interface User{
    user_name:string,
    user_id:number,
    role:string
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/API/User')
        setUsers(response.data) 
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }
    getData()
  }, [])

  return (
    <div className={Styles.UsersSection}>
      <NavBar />
      <h1 className={Styles.Title}>Users</h1>
      <div>
        {users.map((user) => (
          <div className={Styles.UserCard}>
            <h3 key={user.user_id}>{user.user_name}</h3>
            <p key={user.user_id}> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
