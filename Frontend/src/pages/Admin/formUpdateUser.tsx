import { useParams } from 'react-router-dom';
import Styles from '../../Styles/Admin/UpdateUserForm.module.css';
import NavBar from '../../components/navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';

const FormUpdateUser = () => {
  const { id } = useParams(); // id del usuario
  const [name, setName] = useState('');
  const [role, setRole] = useState('admin');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');

  // Traer datos existentes del usuario para precargar el formulario
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:3000/API/User/${id}`);
        const user = response.data;
        setName(user.User_name);
        setRole(user.Role);
        setPhoneNumber(user.Phone_number);
        setEmail(user.Email);
        setDate(user.Hired_date);
        setPassword(user.Password_Hash);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    if (id) fetchUser();
  }, [id]);

  const updateData = async (e: React.FormEvent) => {
    e.preventDefault(); // evitar recarga de la página
    try {
      await axios.put(`http://localhost:3000/API/User/${id}`, {
        User_name: name,
        Role: role,
        Phone_number: phoneNumber,
        Email: email,
        Hired_date: date,
        Password_Hash: password,
        Url_image: ""
      });
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className={Styles.FormPage}>
      <NavBar />
      <h1>Update user</h1>
      <form className={Styles.FormSection} onSubmit={updateData}>
        <input
          name="name"
          type="text"
          placeholder="Please enter the username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          name="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="admin">Admin</option>
          <option value="seller">Seller</option>
          <option value="storage_manager">Storage Manager</option>
        </select>
        <input
          type="text"
          placeholder="Insert the phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Insert the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={Styles.DateSection}>
          <p>Insert the hired date:</p>
          <input
            type="date"
            name="hired_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Insert the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default FormUpdateUser;
