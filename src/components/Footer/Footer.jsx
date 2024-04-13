import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div>
            <FaGithub /> <a href="https://github.com/Mila-Ludmila">GitHub</a>
          </div>
          <div>
            <SiNetlify />{" "}
            <a href="https://app.netlify.com/teams/lydmila-briczkaya">
              Netlify
            </a>
          </div>
          <div>
            <FaTelegram /> <a href="https://t.me/Liudmyla_Brytska">Telegram</a>
          </div>
          <div>
            <MdOutlineAttachEmail /> <span>lydmila.briczkaya@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
