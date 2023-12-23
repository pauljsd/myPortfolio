import { PortfolioList } from "../PortfolioList";

import Button from "../reusables/Button";

import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioTitle}>My Personal Projects</div>
      <div className={styles.project}>
        {PortfolioList.map((project) => (
          <>
            <img src={project.image} alt="projectOne" />
            <p>{project.name}</p>
            <p>Skills: {project.skills}</p>
            <Button color="blue">See Page</Button>
          </>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
