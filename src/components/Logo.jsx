// import styles from "./Logo.module.css";

function Logo() {
  return (
    <div
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: "100px",
        height: "100px",
      }}
    >
      <img src="/images/logo.webp" alt="app-logo" width="128px" />
    </div>
  );
}

export default Logo;
