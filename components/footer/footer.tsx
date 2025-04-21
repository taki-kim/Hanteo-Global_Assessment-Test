import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["wrapper"]}>
      <h1>Hanteo Global Assignment</h1>
      <address className={styles["copyright"]}>
        &copy; 2024. Taki all rights reserved.
      </address>
    </footer>
  );
}
