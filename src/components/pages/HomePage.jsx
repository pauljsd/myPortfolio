import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Button from "../reusables/Button";

import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  // const navigate = useNavigate();

  //sample of responsive page --- https://www.youtube.com/watch?v=G-Cr00UYokU

  function linkToLinkedin() {
    window.open("https://www.linkedin.com/in/paul-atolagbe-b464aa160");
  }
  function linkToGitHub() {
    window.open("https://github.com/pauljsd");
  }
  function linkToTwitter() {
    window.open("https://twitter.com/paul_JSD?t=N-kr9YnrtQ80AXCcjfLYAw&s=09");
  }
  function linkToWhatsapp() {
    window.open("https://wa.link/ydpv7u");
  }

  return (
    <div className={styles.homepage}>
      <div>
        <div>
          <div className={styles.hello}>Hello, I'm </div>
          <div className={styles.name}>Paul Atolagbe</div>
          <p>
            A <span style={{ color: "green" }}>Developer</span> from{" "}
            <span style={{ color: "purple" }}>Lagos</span>
          </p>
          <p>I'm React Enginner from Lagos, and I'm very</p>
          <p>passionate and dedicated to my work.</p>
        </div>
        <div className={styles.homeToAbout}>
          <Link to="/about">
            <Button backgroundColor="#ffa500">About Me</Button>
          </Link>
          <div className={styles.icons}>
            <FaLinkedin
              onClick={linkToLinkedin}
              style={{ fontSize: "1.5em", color: "#00008B" }}
            />
            <FaGithub onClick={linkToGitHub} style={{ fontSize: "1.5em" }} />
            <FaWhatsapp
              onClick={linkToWhatsapp}
              style={{ fontSize: "1.5em", color: "#00c46a" }}
            />
            <FaTwitter
              onClick={linkToTwitter}
              style={{ fontSize: "1.5em", color: "#00bdff" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <p>hy</p>
        <div
          style={{
            borderRadius: "20%",
            overflow: "hidden",
            width: "300px",
          }}
        >
          <img src="/images/paul.jpg" alt="app-logo" width="300px" />
        </div>
        <p>there</p>
      </div>
    </div>
  );
}

export default HomePage;
