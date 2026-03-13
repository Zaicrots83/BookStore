import Styles from '../../Styles/Admin/UpdateUserForm.module.css';
import NavBar from '../../components/navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add_User = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('admin');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault(); // evitar recarga de la página
    try {
      await axios.post(`http://localhost:3000/API/User`, {
        User_name: name,
        Role: role,
        Phone_number: phoneNumber,
        Email: email,
        Hired_date: date,
        Password: password,
        Url_image: ""
      });
      alert("User added successfully!");
      navigate('/AdminUsers'); 
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <div className={Styles.FormPage}>
      <NavBar />
      <h1>Add new user</h1>
      <form className={Styles.FormSection} onSubmit={addUser}>
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Add_User;
