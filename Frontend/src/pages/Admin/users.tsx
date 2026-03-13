import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/navbar";
import Styles from "../../Styles/Admin/AdminUsers.module.css";
import { useNavigate } from "react-router-dom";

interface User {
  user_name: string;
  user_id: number;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:3000/API/User");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getData();
  }, []);

  // Función para eliminar un usuario
  async function deleteUser(user_id: number) {
    try {
      await axios.delete(`http://localhost:3000/API/User/${user_id}`);
      // Actualizamos el estado para remover al usuario de la lista
      setUsers(users.filter((user) => user.user_id !== user_id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  }

  return (
    <div className={Styles.UsersSection}>
      <NavBar />
      <h1 className={Styles.Title}>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.user_id} className={Styles.UserCard}>
            <div className={Styles.User_info}>
              <h3>{user.user_name}</h3>
              <p>{user.role}</p>
            </div>
            <button onClick={() => navigate(`/UpdateUser/${user.user_id}`)}>
              EDIT
            </button>
            <button onClick={() => deleteUser(user.user_id)}>DELETE</button>
          </div>
        ))}
      </div>
      <button className={Styles.AddButton} onClick={() => navigate("/AddUser")}>
        Add new user
      </button>
    </div>
  );
};

export default UsersPage;
