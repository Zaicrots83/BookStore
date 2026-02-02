import { useState, type ChangeEvent } from "react";
import axios from "axios";
import styles from "../Styles/login.module.css";
import icon from "../assets/BookIcon.jpeg";
import Swal from "sweetalert2";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function sendingData(event: ChangeEvent) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/API/Login", {
        Email: email,
        Password: password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(token)
      Swal.fire({
        title: "Welcome",
        text: "Your credentials are correct",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Some information is wrong",
        icon: "warning",
      });
      console.error(error);
    }
  }
  return (
    <div className={styles.LoginPage}>
      <form onSubmit={sendingData} className={styles.loginForm}>
        <img src={icon} alt="icon" />
        <h1 className={styles.title}>Welcome back!</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={handleEmail}
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default login;
