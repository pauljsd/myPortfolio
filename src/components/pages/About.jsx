import styles from "./About.module.css";

import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <div className={styles.about}>
      <div
        className={styles.item1}
        style={{
          borderRadius: "20%",
          overflow: "hidden",
          width: "300px",
        }}
      >
        <img src="/images/paul.jpg" alt="app-logo" width="300px" />
      </div>
      <div className={styles.item2}>
        <div>
          <p className={styles.who}>So who am I?</p>
          <p className={styles.aboutme}>
            Hello there! 👋 I'm Paul Atolagbe, a passionate React developer with
            a love for creating engaging and user-friendly web applications. I
            started web Development in 2022, specialize in building robust and
            scalable web applications using React. And I also work as a Quality
            Assurance Engineer. I prioritize user experience and accessibility
            to ensure that the products I create not only function flawlessly
            but also delight users.
          </p>
        </div>

        <div className={styles.item2Main}>
          <div className={styles.item2Items}>
            <span>
              <FaReact style={{ color: "#00bdff", fontSize: "48px" }} />
            </span>
            <span>React</span>
          </div>

          <div className={styles.item2Items}>
            <span>
              <FaGitAlt style={{ fontSize: "48px" }} />
            </span>
            <span>Git</span>
          </div>

          <div className={styles.item2Items}>
            <span>
              <FaDatabase style={{ color: "grey", fontSize: "48px" }} />
            </span>
            <span>SQL</span>
          </div>

          <div className={styles.item2Items}>
            <span>
              <FaCss3 style={{ color: "blue", fontSize: "48px" }} />
            </span>
            <span>Tailwind</span>
          </div>

          <div className={styles.item2Items}>
            <span>
              <FaHtml5 style={{ color: "#ffa500", fontSize: "48px" }} />
            </span>
            <span>HTML5</span>
          </div>
          <div className={styles.item2Items}>
            <span>
              <FaCss3 style={{ color: "blue", fontSize: "48px" }} />
            </span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
