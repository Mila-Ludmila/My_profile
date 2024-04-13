import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import myPhoto from "./../../img/photo/Liudmyla.jpg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <img src={myPhoto} alt="" />
          </div>
          <div className={`d-flex gap-4 ${styles.link} `}>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/skills">My Skills</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
