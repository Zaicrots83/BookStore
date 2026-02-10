import NavBar from "../../components/navbar.tsx";
import Styles from "../../Styles/Admin/Home.module.css";
import user_icon from "../../assets/user_icon.png";
import book_icon from "../../assets/book_icon.png";
import report_icon from "../../assets/report_icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
      if (!token) {
        navigate("/");
      }
    },[navigate]);

    function redirectUsers(){
      navigate('/AdminUsers')
    }

  return (
    <div className={Styles.HomePage}>
      <NavBar />
      <h1 className={Styles.Title}>Welcome Back!</h1>
      <div className={Styles.Options}>
        <div  className={Styles.card} onClick={redirectUsers}>
          <img src={user_icon} alt="user_icon" />
          <h1>Users</h1>
        </div>
        <div className={Styles.card}>
          <img src={book_icon} alt="book_icon" />
          <h1>Books</h1>
        </div>
        <div className={Styles.card}>
          <img src={report_icon} alt="report_icon" />
          <h1>Reports</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
