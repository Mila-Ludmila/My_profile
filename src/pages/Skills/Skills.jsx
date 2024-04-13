import { withLayout } from "../../components/Main/Main";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section>
      <div className={`container home-container ${styles.wrap}`}>
        <div className="text">
          <h2>MY SKILLS</h2>
          <p>
            Studied: HTML, CSS, JavaScript <span></span>, React as well as
            GitHub at front-end courses.
          </p>
        </div>
        <div className={styles.portfolio}>
          <h3>My portfolio</h3>
          <p>
            <a href="https://mila-ludmila.github.io/Real-Estate/">
              Real Estate
            </a>
          </p>
          <p>
            
            <a href="https://mila-ludmila.github.io/my-repository.github.io/">
              Less
            </a>
          </p>
          <p>
            
            <a href="https://mila-ludmila.github.io/weatherJS/">
              Weather application
            </a>
          </p>
          <p>
            
            <a href="https://mila-ludmila.github.io/calculator/">
              Calculator
            </a>
          </p>
          <p>
            <a href="https://change-theme-ludmila.netlify.app">Change Theme</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default withLayout(Skills);
