import styles from "./About.module.css";
import { FaPhone, FaMapMarker, FaMailBulk, FaCalendar } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className={styles.item2Items}>
        <span>
          <FaMapMarker style={{ color: "blue" }} />
        </span>
        <span>Location: Lagos, Nigeria</span>
      </div>

      <div className={styles.item2Items}>
        <span>
          <FaCalendar style={{ color: "blue" }} />
        </span>
        <span>Age: 25</span>
      </div>
      <div className={styles.item2Items}>
        <span>
          <FaPhone style={{ color: "blue" }} />
        </span>
        <span>Phone: +234 8154505895</span>
      </div>
      <div className={styles.item2Items}>
        <span>
          <FaMailBulk style={{ color: "blue" }} />
        </span>
        <span>Email: atolagbeayobami321@gmail.com</span>
      </div>
    </div>
  );
}

export default Contact;
