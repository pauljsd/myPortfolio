import styles from "./Button.module.css";

function Button({ children, backgroundColor, color }) {
  return (
    <button
      style={{
        color: color || "white",
        backgroundColor: backgroundColor || "#ffffff",
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
