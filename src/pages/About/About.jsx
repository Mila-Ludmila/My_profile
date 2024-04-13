import { withLayout } from "../../components/Main/Main";
import styles from "./About.module.css";
import myDiploma from './../../img/diploma/Diploma Brytska.pdf';
import { BsHandIndex } from "react-icons/bs";
// import { getImagesArr } from '../../share/reducers/images.reducer';
// import { setActiveCards } from '../../share/reducers/activeImages.reducer';



function About() {
  return (
    <section>
      <div className="container home-container">
        <div className={styles.text}>
          <h2>ABOUT ME</h2>
          <p>Hello! My name is Liudmyla. I`m from Ukraine</p>
          <p>I came from the city of Odesa.</p>

        <p>
          This year, I graduated from the <span>IT</span> Step computer academy,
          where I studied Front-end development
        </p>
        <div className={styles.link}>
        <BsHandIndex />
        <a href={myDiploma}>Diploma</a>
        </div>
        
        </div>
      </div>
    </section>
  );
}

export default withLayout(About);
