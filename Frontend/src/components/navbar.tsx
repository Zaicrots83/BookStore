import Icon from "../assets/bookIconBlanck.png";
import Styles from "../Styles/components/navBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  function logOut(){
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <nav className={Styles.NavBar}>
      <ul>
        <div className={Styles.leftContainer}>
            <a href="/AdminHome"><img src={Icon} alt="Icon" /></a>
        </div>
        <div className={Styles.rigthContainer}>
            <li>Profile</li>
            <li onClick={logOut}>Log out</li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
